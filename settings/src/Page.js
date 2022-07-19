import {Component} from "@wordpress/element";
import * as rsssl_api from "./utils/api";
import Header from "./Header";
import DashboardPage from "./DashboardPage";
import SettingsPage from "./SettingsPage";
import Modal from "./Modal";
import PagePlaceholder from './PagePlaceholder';

class Page extends Component {
    constructor() {
        super( ...arguments );
        this.pageProps=[];
        this.pageProps['licenseStatus'] = rsssl_settings.licenseStatus;
        this.state = {
            selectedMainMenuItem: this.get_anchor('main') || 'dashboard',
            selectedMenuItem: this.get_anchor('menu') || 'general',
            selectedStep: 1,
            highLightedField:'',
            fields:'',
            menu:'',
            progress:'',
            isAPILoaded: false,
            pageProps:this.pageProps,
            showModal:false,
            modalData:[],
            dropItemFromModal:false,
        };

        this.getFields().then(( response ) => {
            let fields = response.fields;
            let menu = response.menu;
            let progress = response.progress;
            this.menu = menu;
            this.progress = progress;
            this.fields = fields;
            this.setState({
                isAPILoaded: true,
                fields: fields,
                menu: menu,
                progress: progress,
            });
        });

        this.selectMenu = this.selectMenu.bind(this);
        this.selectStep = this.selectStep.bind(this);
        this.handleModal = this.handleModal.bind(this);
        this.highLightField = this.highLightField.bind(this);
        this.updateField = this.updateField.bind(this);
        this.selectMainMenu = this.selectMainMenu.bind(this);
        this.setPageProps = this.setPageProps.bind(this);
    }

    getFields(){
        return rsssl_api.getFields().then( ( response ) => {
            return response.data;
        });
    }
    /**
     * Allow child blocks to set data on the gridblock
     * @param key
     * @param value
     */
    setPageProps(key, value){
        this.pageProps[key] = value;
        console.log("set page props "+key+value);
        this.setState({
            pageProps: this.pageProps,
        })
    }

    /**
     * Handle instantiation of a modal window
     * @param showModal
     * @param data
     * @param dropItem
     */
    handleModal(showModal, data, dropItem) {
        this.setState({
            showModal: showModal,
            modalData : data,
            dropItemFromModal : dropItem
        })
    }

    selectMenu(selectedMenuItem){
        this.setState({
            selectedMenuItem: selectedMenuItem
        });
    }

    selectStep(selectedStep){
        this.setState({
            selectedStep: selectedStep
        });
    }

    selectMainMenu(selectedMainMenuItem){
        this.setState({
            selectedMainMenuItem :selectedMainMenuItem
        });
    }

    /**
     * Update a field
     * @param field
     */
    updateField(field) {
        let fields = this.fields;
        for (const fieldItem of fields){
            if (fieldItem.id === field.id ){
                fieldItem.value = field.value;
            }
        }
        this.fields = fields;
        this.setState({
            fields :fields
        });
    }

    highLightField(fieldId){
        //switch to settings page
        this.selectMainMenu('settings');
        //get menu item based on fieldId
        let selectedField = null;
        let fields = this.fields.filter(field => field.id === fieldId);
        if (fields.length) {
            selectedField = fields[0];
            this.selectMenu(selectedField.menu_id);
        }
        this.highLightedField = fieldId;
    }
    /**
     * Get # anchor from URL
     * @returns {string|boolean}
     */
    get_anchor = (level) => {
        let url = window.location.href;
        if ( url.indexOf('#') === -1) {
            return false;
        }

        let queryString = url.split('#');
        if (queryString.length === 1) {
            return false;
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
                        return false;
                    }
                }
            }
        }
        return false;
    }

    render() {
        const {
            selectedMainMenuItem,
            selectedMenuItem,
            fields,
            menu,
            progress,
            isAPILoaded,
            showModal,
            modalData,
            dropItemFromModal,
        } = this.state;

        return (
            <div className="rsssl-wrapper">
                {!isAPILoaded && <PagePlaceholder></PagePlaceholder>}
                {showModal && <Modal handleModal={this.handleModal} data={modalData}/>}
                {isAPILoaded && <Header selectedMainMenuItem={selectedMainMenuItem} selectMainMenu={this.selectMainMenu} fields={fields}/> }
                {isAPILoaded && <div className={"rsssl-content-area rsssl-grid rsssl-" + selectedMainMenuItem}>
                    { selectedMainMenuItem === 'settings' &&
                        <SettingsPage
                            dropItemFromModal={dropItemFromModal}
                            pageProps={this.pageProps}
                            handleModal={this.handleModal}
                            updateField={this.updateField}
                            setPageProps={this.setPageProps}
                            selectMenu={this.selectMenu}
                            selectStep={this.selectStep}
                            selectedStep={this.state.selectedStep}
                            highLightField={this.highLightField}
                            highLightedField={this.highLightedField}
                            selectedMenuItem={selectedMenuItem}
                            isAPILoaded={isAPILoaded}
                            fields={fields}
                            menu={menu}
                            progress={progress}/>
                    }
                    { selectedMainMenuItem === 'dashboard' &&
                        <DashboardPage isAPILoaded={isAPILoaded} fields={fields} highLightField={this.highLightField}/>
                    }
                </div> }
            </div>
        );
    }
}
export default Page