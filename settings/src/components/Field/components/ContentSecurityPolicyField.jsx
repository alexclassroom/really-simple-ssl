import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import ChangeStatus from "./ChangeStatus";
import DataTable from "react-data-table-component";

const ContentSecurityPolicyField = ({field, highLightClass, onChangeHandlerDataTable}) => {
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
        item.statusControl = <ChangeStatus item={item} onChangeHandlerDataTable={onChangeHandlerDataTable}/>;
    }

    return (
        <PanelBody className={highLightClass}>
            <DataTable
                columns={columns}
                data={data}
                dense
                pagination
                noDataComponent={__("No results", "really-simple-ssl")} //or your component
            />
        </PanelBody>
    )
}

export default ContentSecurityPolicyField;