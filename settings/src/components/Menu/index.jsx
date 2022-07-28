import {useContext} from "react";
import DashboardContext from "../../contexts/DashboardContext";
import MenuItem from "./components/MenuItem";
import Placeholder from '../../Placeholder';

/**
 * Menu block, rendering th entire menu
 */
const Menu = ({menuItems}) => {
    const {isAPILoaded, menu} = useContext(DashboardContext);

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
                        menuItems.map((menuItem, i) =>
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