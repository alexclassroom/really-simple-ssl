import {Component} from "@wordpress/element";
import Field from "./components/Field";
import Hyperlink from "./Utils/Hyperlink";

import { __ } from '@wordpress/i18n';
import {useContext, useEffect, useState} from "@wordpress/element";
import DashboardContext from "./contexts/DashboardContext";

/**
 * Render a grouped block of settings
 */
const SettingsGroup = ({ showSavedSettingsNotice, fieldsUpdateComplete, selectedMenuItem, saveChangedFields, group, fields }) => {
    const {pageProps, setSelectedMenuItem, fields: allFields, setFields} = useContext(DashboardContext);

    const [disabled, setDisabled] = useState(false);
    const [msg, setMsg] = useState('');
    const [activeGroup, setActiveGroup] = useState('');
    const [upgrade, setUpgrade] = useState('');
    const [selectedFields, setSelectedFields] = useState(null);

    useEffect(() => {
        let msg = __("Learn more about %sPremium%s", "really-simple-ssl");
        let status = getLicenseStatus();
        if ( rsssl_settings.pro_plugin_active ) {
            if ( status === 'empty' || status === 'deactivated' ) {
                msg = rsssl_settings.messageInactive;
            } else {
                msg = rsssl_settings.messageInvalid;
            }
        }

        //set group default to current menu item
        let activeGroup = selectedMenuItem;
        if ( selectedMenuItem.hasOwnProperty('groups') ) {
            let currentGroup = selectedMenuItem.groups.filter((filter) => filter.id === group);
            if (currentGroup.length > 0) {
                activeGroup = currentGroup[0];
            }
        }
        let upgrade = activeGroup.upgrade ? activeGroup.upgrade : 'https://really-simple-ssl.com/pro';

        let disabled = status !== 'valid' && activeGroup.premium;

        let selectedFields = [];
        //get all fields with group_id this.props.group_id
        for (const selectedField of fields){
            if (selectedField.group_id === group ){
                selectedFields.push(selectedField);
            }
        }
        setSelectedFields(selectedFields);

        setDisabled(disabled);
        setMsg(msg);
        setActiveGroup(activeGroup);
        setUpgrade(upgrade);
    }, [selectedMenuItem])

    const getLicenseStatus = () => {
        if (pageProps.hasOwnProperty('licenseStatus') ){
            return pageProps['licenseStatus'];
        }
        return 'invalid';
    }

    const handleMenuLink = (id) => {
        setSelectedMenuItem(id);
    }

    const onChangeHandler = (index, fieldValue) => {
        const newSelectedFields = selectedFields.map((field, i) => {
            if(i === index) {
                const newField = { ...field, value: fieldValue }
                const newFields = allFields.map((allField) => {
                    if(allField.id === field.id) {
                        return { ...allField, value: fieldValue };
                    }
                    return allField;
                });
                setFields(newFields);
                return newField;
            }
            return field;
        })

        saveChangedFields(newSelectedFields[index].id );
        setSelectedFields(newSelectedFields)
    }

    return (
        <div className="rsssl-grid-item">
            {
                activeGroup && activeGroup.title &&
                    <div className="rsssl-grid-item-header">
                        <h3 className="rsssl-h4">{activeGroup.title}</h3>
                    </div>
            }
            <div className="rsssl-grid-item-content">
                {activeGroup && activeGroup.intro && <div className="rsssl-settings-block-intro">{activeGroup.intro}</div>}
                {
                    selectedFields && selectedFields.map((field, i) =>
                        <Field
                            key={i}
                            index={i}
                            showSavedSettingsNotice={showSavedSettingsNotice}
                            fieldsUpdateComplete = {fieldsUpdateComplete}
                            saveChangedFields={saveChangedFields}
                            fields={selectedFields}
                            onChangeHandler={onChangeHandler}
                        />
                    )
                }
                {
                    disabled &&
                    <div className="rsssl-locked">
                        <div className="rsssl-locked-overlay">
                            <span className="rsssl-progress-status rsssl-premium">{__("Premium","really-simple-ssl")}</span>
                            { rsssl_settings.pro_plugin_active &&
                                <span>
                                    {msg}
                                    <a className="rsssl-locked-link" href="#" onClick={ () => handleMenuLink('license') }>
                                        {__("Check license", "really-simple-ssl")}
                                    </a>
                                </span>
                            }
                            { !rsssl_settings.pro_plugin_active && <Hyperlink target="_blank" text={msg} url={upgrade}/> }
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}


// class SettingsGroup extends Component {
//     constructor() {
//         super( ...arguments );
//         this.state = {
//             disabled:false,
//             status:'invalid',
//             fields:this.props.fields,
//             isAPILoaded: this.props.isAPILoaded,
//         };
//         this.upgrade='https://really-simple-ssl.com/pro';
//         this.msg='';
//         this.status='invalid';
//         this.fields = this.props.fields;
//         this.activeGroup='';
//     }
//
//     componentDidMount() {
//         this.getLicenseStatus = this.getLicenseStatus.bind(this);
//         let selectedMenuItem = this.props.selectedMenuItem;
//         this.msg = __("Learn more about %sPremium%s", "really-simple-ssl");
//         if ( rsssl_settings.pro_plugin_active ) {
//             this.status = this.getLicenseStatus();
//             if ( this.status === 'empty' || this.status === 'deactivated' ) {
//                 this.msg = rsssl_settings.messageInactive;
//             } else {
//                 this.msg = rsssl_settings.messageInvalid;
//             }
//         }
//
//         //set group default to current menu item
//         this.activeGroup = selectedMenuItem;
//         if ( selectedMenuItem.hasOwnProperty('groups') ) {
//             let currentGroup = selectedMenuItem.groups.filter(group => group.id === this.props.group);
//             if (currentGroup.length>0) {
//                 this.activeGroup = currentGroup[0];
//             }
//         }
//         this.upgrade = this.activeGroup.upgrade ? this.activeGroup.upgrade : this.upgrade;
//         let disabled = this.status !=='valid' && this.activeGroup.premium;
//         this.setState({
//             status: this.status,
//             disabled: disabled,
//         });
//     }
//
//     getLicenseStatus(){
//         if (this.props.pageProps.hasOwnProperty('licenseStatus') ){
//             return this.props.pageProps['licenseStatus'];
//         }
//         return 'invalid';
//     }
//
//     handleMenuLink(id){
//         this.props.selectMenu(id);
//     }
//
//     render(){
//         const {
//             disabled,
//             status,
//         } = this.state;
//         let selectedMenuItem = this.props.selectedMenuItem;
//         let selectedFields = [];
//         //get all fields with group_id this.props.group_id
//         for (const selectedField of this.props.fields){
//             if (selectedField.group_id === this.props.group ){
//                 selectedFields.push(selectedField);
//             }
//         }
//         let activeGroup = this.activeGroup;
//         return (
//             <div className="rsssl-grid-item">
//                 {activeGroup && activeGroup.title && <div className="rsssl-grid-item-header"><h3 className="rsssl-h4">{activeGroup.title}</h3></div>}
//                 <div className="rsssl-grid-item-content">
//                     {activeGroup && activeGroup.intro && <div className="rsssl-settings-block-intro">{activeGroup.intro}</div>}
//                     {selectedFields.map((field, i) => <Field dropItemFromModal={this.props.dropItemFromModal} handleModal={this.props.handleModal} showSavedSettingsNotice={this.props.showSavedSettingsNotice} updateField={this.props.updateField} setPageProps={this.props.setPageProps} fieldsUpdateComplete = {this.props.fieldsUpdateComplete} key={i} index={i} highLightField={this.props.highLightField} highLightedField={this.props.highLightedField} saveChangedFields={this.props.saveChangedFields} field={field} fields={selectedFields}/>)}
//                     {disabled && <div className="rsssl-locked">
//                         <div className="rsssl-locked-overlay">
//                             <span className="rsssl-progress-status rsssl-premium">{__("Premium","really-simple-ssl")}</span>
//                             { rsssl_settings.pro_plugin_active && <span>{this.msg}<a className="rsssl-locked-link" href="#" onClick={ () => this.handleMenuLink('license') }>{__("Check license", "really-simple-ssl")}</a></span>}
//                             { !rsssl_settings.pro_plugin_active && <Hyperlink target="_blank" text={this.msg} url={this.upgrade}/> }
//                         </div>
//                     </div>}
//                 </div>
//             </div>
//         )
//     }
// }

export default SettingsGroup