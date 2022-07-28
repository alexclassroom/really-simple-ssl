import React, {useEffect, useState} from "react";
import * as rsssl_api from "../utils/api";
import DashboardContext from "./DashboardContext";
import Placeholder from "../Placeholder";

const DashboardContextProvider = (props) => {
    const [selectedMainMenuItem, setSelectedMainMenuItem] = useState('dashboard');
    const [selectedMenuItem, setSelectedMenuItem] = useState('general');
    const [selectedStep, setSelectedStep] = useState(1);
    const [highLightedField, setHighLightedField] = useState('');
    const [fields, setFields] = useState('');
    const [menu, setMenu] = useState('');
    const [progress, setProgress] = useState('');
    const [isAPILoaded, setIsAPILoaded] = useState(false);
    const [pageProps, setPageProps] = useState();
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState([]);
    const [dropItemFromModal, setDropItemFromModal] = useState(false);
    const [nextMenuItem, setNextMenuItem] = useState('');
    const [previousMenuItem, setPreviousMenuItem] = useState('');

    useEffect(() => {
        const getAnchor = (level) => {
            let url = window.location.href;
            if ( url.indexOf('#') === -1) {
                return null;
            }

            let queryString = url.split('#');
            if (queryString.length === 1) {
                return null;
            }

            let url_variables = queryString[1].split('#');
            if (url_variables.length > 0) {
                let anchor = url_variables[0];
                if ( url.indexOf('/') === -1) {
                    return anchor;
                } else {
                    let anchor_variables = anchor.split('/');
                    if (anchor_variables.length > 0){
                        if (level === 'main') {
                            return anchor_variables[0];
                        } else if (anchor_variables.hasOwnProperty(1)) {
                            return anchor_variables[1];
                        } else {
                            return null;
                        }
                    }
                }
            }
            return null;
        }
        const mainMenuItem = getAnchor('main') || 'dashboard';
        setSelectedMainMenuItem(mainMenuItem);
        const menuItem = getAnchor('menu') || 'general';
        setSelectedMenuItem(menuItem);
        setPageProps({
            licenseStatus: rsssl_settings.licenseStatus ? rsssl_settings.licenseStatus : 'invalid'
        })
    })

    useEffect(() => {
        getFields().then((response) => {
            let fields = response.fields;
            let menu = response.menu;
            let progress = response.progress;
            setFields(fields);
            setMenu(menu);
            setProgress(progress);
            setIsAPILoaded(true);
            getPreviousAndNextMenuItems(menu.menu_items);
        });
    }, []);

    const setNewPageProps = (key, value) => {
        pageProps[key] = value;
        setPageProps(pageProps);
    }

    const getFields = () => {
        return rsssl_api.getFields().then( ( response ) => {
            return response.data;
        });
    }

    const menuItemParser = (parsedMenuItems, menuItems) => {
        menuItems.forEach((menuItem) => {
            parsedMenuItems.push(menuItem.id);
            if(menuItem.hasOwnProperty('menu_items')) {
                menuItemParser(parsedMenuItems, menuItem.menu_items);
            }
        });

        return parsedMenuItems;
    }

    const getPreviousAndNextMenuItems = (menuItems) => {
        let previousMenuItem;
        let nextMenuItem;
        const { menu_items } = menu;
        if(!menuItems){
            menuItems = menu_items;
        }

        const parsedMenuItems = [];
        menuItemParser(parsedMenuItems, menuItems);

        // Finds current menu item index
        const currentMenuItemIndex = parsedMenuItems.findIndex((menuItem) => menuItem === selectedMenuItem)

        if(currentMenuItemIndex !== -1) {
            previousMenuItem = parsedMenuItems[ currentMenuItemIndex === 0 ? '' : currentMenuItemIndex - 1];
            nextMenuItem = parsedMenuItems[ currentMenuItemIndex === parsedMenuItems.length - 1 ? '' : currentMenuItemIndex + 1];

            setPreviousMenuItem(previousMenuItem ? previousMenuItem : parsedMenuItems[0]);
            setNextMenuItem(nextMenuItem ? nextMenuItem : parsedMenuItems[parsedMenuItems.length - 1]);
        }


        return { nextMenuItem, previousMenuItem };
    }

    const handleModal = (showModal, data, dropItem) => {
        setShowModal(showModal);
        setModalData(modalData);
        setDropItemFromModal(dropItem);
    }

    const updateField = (field) => {
        let fields = fields;
        for (const fieldItem of fields){
            if (fieldItem.id === field.id ){
                fieldItem.value = field.value;
            }
        }
        setFields(fields);
    }

    const highLightField = (fieldId) => {
        //switch to settings page
        setSelectedMainMenuItem('settings');
        //get menu item based on fieldId
        let selectedField = null;
        let filteredFields = fields.filter(field => field.id === fieldId);
        if (filteredFields.length) {
            selectedField = filteredFields[0];
            setSelectedMenuItem(selectedField.menu_id);
        }
        setHighLightedField(fieldId);
    }

    return (
        <DashboardContext.Provider value={{
            selectedMainMenuItem,
            setSelectedMainMenuItem,
            selectedMenuItem,
            setSelectedMenuItem,
            selectedStep,
            setSelectedStep,
            highLightedField,
            setHighLightedField,
            fields,
            setFields,
            menu,
            setMenu,
            progress,
            setProgress,
            isAPILoaded,
            setIsAPILoaded,
            pageProps,
            setPageProps,
            showModal,
            setShowModal,
            modalData,
            setModalData,
            dropItemFromModal,
            setDropItemFromModal,
            nextMenuItem,
            setNextMenuItem,
            previousMenuItem,
            setPreviousMenuItem,
            setNewPageProps,
            getPreviousAndNextMenuItems,
            handleModal,
            updateField,
            highLightField,
        }}>
            { props.children }
        </DashboardContext.Provider>
    )
}

export default DashboardContextProvider;