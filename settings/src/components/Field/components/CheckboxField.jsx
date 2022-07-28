import { PanelRow, ToggleControl } from '@wordpress/components';

const CheckboxField = ({ highLightClass, field, onChangeHandler }) => {
    return (
        <PanelRow className={ highLightClass}>
            <ToggleControl
                disabled = {field.disabled}
                checked= { field.value === 1 }
                help={ field.comment }
                label={ field.label }
                onChange={ ( fieldValue ) => onChangeHandler(fieldValue) }
            />
        </PanelRow>
    );
}

export default CheckboxField;