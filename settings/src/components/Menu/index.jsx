import {useContext} from "react";
import DashboardContext from "../../contexts/DashboardContext";
import MenuItem from "./components/MenuItem";
import Placeholder from '../../Placeholder';
import {useEffect, useState} from "@wordpress/element";

/**
 * Menu block, rendering th entire menu
 */
const Menu = () => {
    const {isAPILoaded, menu} = useContext(DashboardContext);
    const [menuItems, setMenuItems] = useState(null)

    useEffect(() => {
        setMenuItems(menu.menu_items)
    }, [menu])

    if(!isAPILoaded) {
        return (
            <Placeholder></Placeholder>
        );
    }

    return (
        <div className="rsssl-wizard-menu rsssl-grid-item">
            <div className="rsssl-grid-item-header">
                <h1 className="rsssl-h4">{menu.title}</h1>
            </div>
            <div className="rsssl-grid-item-content">
                <div className="rsssl-wizard-menu-items">
                    {
                        menuItems && menuItems.map((menuItem, i) =>
                            <MenuItem key={i} menuItem={menuItem}/>
                        )
                    }
                </div>
            </div>
            <div className="rsssl-grid-item-footer">

            </div>
        </div>
    )
}

export default Menu;