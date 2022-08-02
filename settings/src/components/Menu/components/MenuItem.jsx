import {useContext, useEffect, useState} from "react";
import DashboardContext from "../../../contexts/DashboardContext";
import Placeholder from "../../../Placeholder";

const MenuItem = ({menuItem}) => {
    const { isAPILoaded, selectedMenuItem, setSelectedMenuItem } = useContext(DashboardContext);
    const [menuSelected, setMenuSelected] = useState(selectedMenuItem === menuItem.id);
    const [activeClass, setActiveClass] = useState(selectedMenuItem === menuItem.id ? ' rsssl-active' : '');
    const [featuredClass, setFeaturedClass] = useState(menuItem.featured ? ' rsssl-featured' : '');
    const [href, setHref] = useState(`#settings/${menuItem.id}`);

    useEffect(() => {
        let menuSelected = selectedMenuItem === menuItem.id;
        if (menuItem.menu_items) {
            for (const item of menuItem.menu_items){
                if (item.id === selectedMenuItem ){
                    menuSelected=true;
                }
            }
        }


        let activeClass = menuSelected ? ' rsssl-active' : '';
        let featuredClass = menuItem.featured ? ' rsssl-featured' : '';
        let href = '#settings/'+menuItem.id;

        setMenuSelected(menuSelected);
        setActiveClass(activeClass);
        setFeaturedClass(featuredClass);
        setHref(href);
    }, [selectedMenuItem])

    const handleClick = () => {
        setSelectedMenuItem(menuItem.id);
    }

    if(!isAPILoaded) {
        return (
            <Placeholder></Placeholder>
        );
    }

    return (
        menuItem.visible && <div className={"rsssl-menu-item" + activeClass + featuredClass}>
            <a href={href} onClick={() => handleClick()}>
                <span>{menuItem.title}</span>
                { menuItem.featured && <p className="rsssl-menu-item-featured">{menuItem.featured}</p>}
            </a>
            {
                (menuItem.menu_items && menuSelected) &&
                <div className="rsssl-submenu-item">
                    {
                        menuItem.menu_items.map((subMenuItem, i) => subMenuItem.visible && <MenuItem key={i} menuItem={subMenuItem}/>)
                    }
                </div>
            }
        </div>
    )
}

export default MenuItem;
