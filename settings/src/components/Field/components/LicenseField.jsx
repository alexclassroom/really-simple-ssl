import {PanelBody} from '@wordpress/components';
import TaskElement from "../../../TaskElement";
import Placeholder from '../../../Placeholder';
import * as rsssl_api from "../../../utils/api";
import {useContext, useEffect, useState} from "react";
import DashboardContext from "../../../contexts/DashboardContext";

const LicenseField = ({fieldsUpdateComplete, index, fields, field, saveChangedFields, highLightClass}) => {
    const {setFields, highLightedField, highLightField, setNewPageProps} = useContext(DashboardContext);
    const [noticesLoaded, setNoticesLoaded] = useState(false);
    const [fieldsUpdateCompleted, setFieldsUpdateCompleted] = useState(false);
    const [licenseStatus, setLicenseStatus] = useState('invalid');
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        highLightField('');

        if (!fieldsUpdateCompleted && fieldsUpdateComplete ) {
            getLicenseNotices().then(( response ) => {
                setFieldsUpdateCompleted(fieldsUpdateComplete)
                setNewPageProps('licenseStatus', response.licenseStatus);
                setNotices(response.notices);
                setLicenseStatus(response.licenseStatus);
                setNoticesLoaded(true);
            });
        }
    }, [])

    const getLicenseNotices = () => {
        return rsssl_api.runTest('licenseNotices', 'refresh').then( ( response ) => {
            return response.data;
        });
    }

    const onChangeHandler = (fieldValue) => {
        setFieldsUpdateCompleted(false);
        fields[index]['value'] = fieldValue;
        saveChangedFields(field.id)
        setFields(fields);
        this.setState({
            fields: fields,
        })
    }

    const onCloseTaskHandler = () => {}

    return (
        <PanelBody className={ highLightClass }>
            <div className="components-base-control">
                <div className="components-base-control__field">
                    <label
                        className="components-base-control__label"
                        htmlFor={field.id}>{field.label}</label>
                    <input className="components-text-control__input"
                           type="password"
                           id={field.id}
                           value={field.value}
                           onChange={ ( e ) => onChangeHandler(e.target.value) }
                    />
                </div>
                {!noticesLoaded && <Placeholder></Placeholder>}
                {noticesLoaded && notices.map((notice, i) => <TaskElement key={i} index={i} notice={notice} onCloseTaskHandler={onCloseTaskHandler} highLightField=""/>)}
            </div>
        </PanelBody>
    );
}

export default LicenseField;
