import { PanelRow, RadioControl } from '@wordpress/components';

const RadioField = ({highLightClass, field, options, onChangeHandler}) => {
    return (
        <PanelRow className={ highLightClass}>
            <RadioControl
                label={ field.label }
                onChange={ ( fieldValue ) => onChangeHandler(fieldValue) }
                selected={ field.value }
                options={ options }
            />
        </PanelRow>
    );
}

export default RadioField;