import { PanelBody, SelectControl } from '@wordpress/components';

const SelectField = ({highLightClass, field, options, onChangeHandler}) => {
    return (
        <PanelBody className={ highLightClass}>
            <SelectControl
                // multiple
                help={ field.comment }
                label={ field.label }
                onChange={ ( fieldValue ) => onChangeHandler(fieldValue) }
                value= { field.value }
                options={ options }
            />
        </PanelBody>
    )
}

export default SelectField;