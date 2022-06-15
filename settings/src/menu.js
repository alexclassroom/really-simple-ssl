import {
    Placeholder,
} from '@wordpress/components';
import {
    Component,
} from '@wordpress/element';

class MenuItem extends Component {
    constructor() {
        super( ...arguments );
        this.menuItem = this.props.menuItem;
        this.state = {
            menuItem: this.props.menuItem,
            isAPILoaded: this.props.isAPILoaded,
        };
    }
    handleClick(){
        this.props.selectMenu(this.props.menuItem.id);
    }

    componentDidMount() {
        this.handleClick = this.handleClick.bind(this);
    }

    render(){
        const {
            menuItem,
            isAPILoaded,
        } = this.state;

          let menuIsSelected = this.props.selectedMenuItem===this.props.menuItem;
        if (this.props.menuItem.menu_items) {
            for (const item of this.props.menuItem.menu_items){
                if (item === this.props.selectedMenuItem ){
                    menuIsSelected=true;
                }
            }
        }
        let activeClass = menuIsSelected ? 'rsssl-active' : '';

        return (
            <div className={"rsssl-menu-item " + activeClass}>
                <a href="#" onClick={ () => this.handleClick() }>{this.props.menuItem.title}</a>
                {this.props.menuItem.menu_items && menuIsSelected && <div className="rsssl-submenu-item"> this.props.menuItem.menu_items.map((menuItem, i) => <MenuItem key={i} menuItem={menuItem} selectMenu={this.props.selectMenu} selectedMenuItem={this.props.selectedMenuItem}/>) </div> }
            </div>
        )
    }
}

class Menu extends Component {
    constructor() {
        super( ...arguments );
        this.state = {
            fields:this.props.fields,
            menu: this.props.menu,
            menuItems: this.props.menuItems,
            isAPILoaded: this.props.isAPILoaded,
        };
    }

    render() {
        const {
            fields,
            menu,
            menuItems,
            isAPILoaded,
        } = this.state;

        if ( ! isAPILoaded ) {
            return (
                <Placeholder></Placeholder>
            );
        }

        return (
                <div className="rsssl-grid-item">
                    <div className="rsssl-grid-item-header">
                        <h1 className="h4">{this.props.menu.title}</h1>
                    </div>
                    <div className="rsssl-grid-item-content">
                        <div className="rsssl-wizard-menu-items">
                            {menuItems.map((menuItem, i) => <MenuItem key={i} isAPILoaded={isAPILoaded} menuItem={menuItem} selectMenu={this.props.selectMenu} selectedMenuItem={this.props.selectedMenuItem}/>)}
                        </div>
                    </div>
                    <div className="rsssl-grid-item-footer">

                    </div>
                </div>
        )
    }
}

export default Menu;