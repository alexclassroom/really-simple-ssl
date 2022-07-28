import { PanelBody, TextControl } from '@wordpress/components';

const TextField = ({highLightClass, field, onChangeHandler}) => {
    return (
        <PanelBody className={ highLightClass}>
            <TextControl
                help={ field.comment }
                label={ field.label }
                onChange={ ( fieldValue ) => onChangeHandler(fieldValue) }
                value= { field.value }
            />
        </PanelBody>
    );
}

export default TextField;