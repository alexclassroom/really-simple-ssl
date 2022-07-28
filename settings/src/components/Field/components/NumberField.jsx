import { PanelBody, __experimentalNumberControl as NumberControl } from '@wordpress/components';

const NumberField = ({highLightClass, field, onChangeHandler}) => {
    return (
        <PanelBody className={ highLightClass}>
            <NumberControl
                onChange={ ( fieldValue ) => onChangeHandler(fieldValue) }
                help={ field.comment }
                label={ field.label }
                value= { field.value }
            />
        </PanelBody>
    );
}

export default NumberField;