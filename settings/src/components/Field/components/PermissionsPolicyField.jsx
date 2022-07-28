import { PanelBody, SelectControl } from '@wordpress/components';
import ChangeStatus from "./ChangeStatus";
import DataTable from "react-data-table-component";

const PermissionsPolicyField = ({ field, highLightClass, options, onChangeHandlerDataTable }) => {
    //build our header
    const columns = [];
    field.columns.forEach(function(item, i) {
        let newItem = {
            name: item.name,
            sortable: item.sortable,
            width: item.width,
            selector: row => row[item.column],
        }
        columns.push(newItem);
    });
    let data = field.value;

    if (typeof data === 'object') {
        data = Object.values(data);
    }
    if (!Array.isArray(data) ) {
        data = [];
    }
    for (const item of data){
        let disabled = false;
        if (item.status !== 1) {
            item.value = '()';
            disabled = true;
        }
        item.valueControl = <SelectControl
            help=''
            value={item.value}
            disabled={disabled}
            options={options}
            label=''
            onChange={ ( fieldValue ) => onChangeHandlerDataTable( fieldValue, item, 'value' ) }
        />
        item.statusControl = <ChangeStatus item={item} onChangeHandlerDataTable={onChangeHandlerDataTable}/>;
    }

    return (
        <PanelBody className={ highLightClass}>
            <DataTable
                columns={columns}
                data={data}
                dense
                pagination
            />
        </PanelBody>
    )
}

export default PermissionsPolicyField;