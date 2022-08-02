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

const Field = ({ fieldsUpdateComplete, saveChangedFields, fields, index, onChangeHandler}) => {
    const {
        dropItemFromModal,
        handleModal,
        updateField,
        highLightField,
        highLightedField
    } = useContext(DashboardContext);

    const [options, setOptions] = useState([]);

    useEffect(() => {
        highLightField('');
        let options = [];
        if ( fields[index].options ) {
            for (let key in fields[index].options) {
                if (fields[index].options.hasOwnProperty(key)) {
                    let item = {};
                    item.label = fields[index].options[key];
                    item.value = key;
                    options.push(item);
                }
            }
        }
        setOptions(options);
    }, [fields]);

    const onChange = (newValue) => {
        onChangeHandler(index, newValue);
    }

    /**
     * Handle data update for a datatable
     * @param enabled
     * @param clickedItem
     * @param type
     */
    const onChangeHandlerDataTable = (enabled, clickedItem, type ) => {
        if (typeof fields[index].value === 'object') {
            fields[index].value = Object.values(fields[index].value);
        }
        //find this item in the field list
        for (const item of fields[index].value){
            if (item.id === clickedItem.id) {
                item[type] = enabled;
            }
            delete item.valueControl;
            delete item.statusControl;
        }
        //the updateItemId allows us to update one specific item in a field set.
        fields[index].updateItemId = clickedItem.id;
        let saveFields = [];
        saveFields.push(fields[index]);
        updateField(fields[index]);
        rsssl_api.setFields(saveFields).then(( response ) => {
            //this.props.showSavedSettingsNotice();
        });
    }

    const highLightClass = highLightedField === fields[index].id ? 'rsssl-highlight' : '';

    if ( !fields[index].visible ) {
        return (
            <InvisibleField />
        );
    }

    if ( fields[index].type==='checkbox' ){
        return (
            <CheckboxField field={fields[index]} highLightClass={highLightClass} onChangeHandler={onChange} />
        );
    }
    if ( fields[index].type==='radio' ){
        return (
            <RadioField field={fields[index]} highLightClass={highLightClass} options={options} onChangeHandler={onChange}/>
        );
    }
    if ( fields[index].type==='text' ){
        return (
            <TextField field={fields[index]} highLightClass={highLightClass} onChangeHandler={onChange}/>
        );
    }

    if ( fields[index].type==='license' ){
        return (
           <LicenseField
               field={fields[index]}
               fields={fields}
               fieldsUpdateComplete={fieldsUpdateComplete}
               saveChangedFields={saveChangedFields}
               index={index}
               highLightClass={highLightClass}/>
        );
    }
    if ( fields[index].type==='number' ){
        return (
            <NumberField field={fields[index]} highLightClass={highLightClass} onChangeHandler={onChange}/>
        );
    }
    if ( fields[index].type==='email' ){
        return (
            <TextField field={fields[index]} highLightClass={highLightClass} onChangeHandler={onChange}/>
        );
    }

    if ( fields[index].type==='select') {
        return (
            <SelectField field={fields[index]} highLightClass={highLightClass} options={options} onChangeHandler={onChange}/>
        )
    }

    if ( fields[index].type==='permissionspolicy' ) {
        return (
            <PermissionsPolicyField field={fields[index]} highLightClass={highLightClass} options={options} onChangeHandlerDataTable={onChangeHandlerDataTable}/>
        )
    }

    if ( fields[index].type==='contentsecuritypolicy' ) {
        return (
            <ContentSecurityPolicyField field={fields[index]} highLightClass={highLightClass} onChangeHandlerDataTable={onChangeHandlerDataTable}/>
        )
    }

    if ( fields[index].type === 'mixedcontentscan' ) {
        return (
            <MixedContentScanField fields={fields} field={fields[index]} handleModal={handleModal} dropItemFromModal={dropItemFromModal}/>
        )
    }

    return (
        'not found field type ' + fields[index].type
    );
}


export default Field;