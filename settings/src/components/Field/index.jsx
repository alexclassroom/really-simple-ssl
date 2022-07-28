import * as rsssl_api from "../../utils/api";
import {useContext, useEffect, useState} from "react";
import DashboardContext from "../../contexts/DashboardContext";
import InvisibleField from "./components/InvisibleField";
import CheckboxField from "./components/CheckboxField";
import RadioField from "./components/RadioField";
import TextField from "./components/TextField";
import NumberField from "./components/NumberField";
import SelectField from "./components/SelectField";
import PermissionsPolicyField from "./components/PermissionsPolicyField";
import ContentSecurityPolicyField from "./components/ContentSecurityPolicyField";
import MixedContentScanField from "./components/MixedContentScanField";
import LicenseField from "./components/LicenseField";

const Field = ({ showSavedSettingsNotice, fieldsUpdateComplete, saveChangedFields, field, fields, index}) => {
    const {
        dropItemFromModal,
        handleModal,
        updateField,
        highLightField,
        highLightedField,
        setFields
    } = useContext(DashboardContext);

    const [options, setOptions] = useState([]);

    useEffect(() => {
        highLightField('');
        let options = [];
        if ( field.options ) {
            for (let key in field.options) {
                if (field.options.hasOwnProperty(key)) {
                    let item = {};
                    item.label = field.options[key];
                    item.value = key;
                    options.push(item);
                }
            }
        }
        setOptions(options);
    }, []);

    const onChangeHandler = (fieldValue) => {
        fields[index]['value'] = fieldValue;
        saveChangedFields( field.id );
        setFields(fields);
    }

    /**
     * Handle data update for a datatable
     * @param enabled
     * @param clickedItem
     * @param type
     */
    const onChangeHandlerDataTable = (enabled, clickedItem, type ) => {
        if (typeof field.value === 'object') {
            field.value = Object.values(field.value);
        }
        //find this item in the field list
        for (const item of field.value){
            if (item.id === clickedItem.id) {
                item[type] = enabled;
            }
            delete item.valueControl;
            delete item.statusControl;
        }
        //the updateItemId allows us to update one specific item in a field set.
        field.updateItemId = clickedItem.id;
        let saveFields = [];
        saveFields.push(field);
        updateField(field);
        rsssl_api.setFields(saveFields).then(( response ) => {
            //this.props.showSavedSettingsNotice();
        });
    }

    const highLightClass = highLightedField === field.id ? 'rsssl-highlight' : '';

    if ( !field.visible ) {
        return (
            <InvisibleField />
        );
    }

    if ( field.type==='checkbox' ){
        return (
            <CheckboxField field={field} highLightClass={highLightClass} onChangeHandler={onChangeHandler} />
        );
    }
    if ( field.type==='radio' ){
        return (
            <RadioField field={field} highLightClass={highLightClass} options={options} onChangeHandler={onChangeHandler}/>
        );
    }
    if ( field.type==='text' ){
        return (
            <TextField field={field} highLightClass={highLightClass} onChangeHandler={onChangeHandler}/>
        );
    }

    if ( field.type==='license' ){
        return (
           <LicenseField
               field={field}
               fields={fields}
               fieldsUpdateComplete={fieldsUpdateComplete}
               saveChangedFields={saveChangedFields}
               index={index}
               highLightClass={highLightClass}/>
        );
    }
    if ( field.type==='number' ){
        return (
            <NumberField field={field} highLightClass={highLightClass} onChangeHandler={onChangeHandler}/>
        );
    }
    if ( field.type==='email' ){
        return (
            <TextField field={field} highLightClass={highLightClass} onChangeHandler={onChangeHandler}/>
        );
    }

    if ( field.type==='select') {
        return (
            <SelectField field={field} highLightClass={highLightClass} options={options} onChangeHandler={onChangeHandler}/>
        )
    }

    if ( field.type==='permissionspolicy' ) {
        return (
            <PermissionsPolicyField field={field} highLightClass={highLightClass} options={options} onChangeHandlerDataTable={onChangeHandlerDataTable}/>
        )
    }

    if ( field.type==='contentsecuritypolicy' ) {
        return (
            <ContentSecurityPolicyField field={field} highLightClass={highLightClass} onChangeHandlerDataTable={onChangeHandlerDataTable}/>
        )
    }

    if ( field.type === 'mixedcontentscan' ) {
        return (
            <MixedContentScanField fields={fields} field={field} handleModal={handleModal} dropItemFromModal={dropItemFromModal}/>
        )
    }

    return (
        'not found field type ' + field.type
    );
}


export default Field;