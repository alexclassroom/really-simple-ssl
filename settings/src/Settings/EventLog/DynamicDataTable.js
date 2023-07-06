import {__} from '@wordpress/i18n';
import React, {useEffect, useState} from 'react';
import DataTable, {createTheme} from "react-data-table-component";
import DynamicDataTableStore from "./DynamicDataTableStore";
import * as rsssl_api from "../../utils/api";

const DynamicDataTable = (props) => {
    const {
        DynamicDataTable,
        dataLoaded,
        pagination,
        dataActions,
        handleTableRowsChange,
        fetchDynamicData,
        handleTableSort,
        handleTablePageChange,
        handleTableSearch
    } = DynamicDataTableStore()


    //we create the columns
    let columns = [];
    //getting the fields from the props
    let field = props.field;
    // console.log(field)
    //we loop through the fields
    field.columns.forEach(function (item, i) {
        let newItem = buildColumn(item)
        columns.push(newItem);
    });

    console.log(columns)

    useEffect(() => {
        if (!dataLoaded) {
            fetchDynamicData(field.action);
        }
    });

    useEffect(() => {
        if (dataActions) {
            fetchDynamicData(field.action);
        }
    }, [dataActions]);

    const customStyles = {
        headCells: {
            style: {
                paddingLeft: '0', // override the cell padding for head cells
                paddingRight: '0',
            },
        },
        cells: {
            style: {
                paddingLeft: '0', // override the cell padding for data cells
                paddingRight: '0',
            },
        },
    };
    createTheme('really-simple-plugins', {
        divider: {
            default: 'transparent',
        },
    }, 'light');

    //only show the datatable if the data is loaded
    if (!dataLoaded && columns.length === 0 && DynamicDataTable.length === 0) {
        return (
            <div className="rsssl-spinner">
                <div className="rsssl-spinner__inner">
                    <div className="rsssl-spinner__icon"></div>
                    <div className="rsssl-spinner__text">{__("Loading...", "really-simple-ssl")}</div>
                </div>
            </div>
        );
    }

    let searchableColumns = [];
    //setting the searchable columns
    columns.map(column => {
        if (column.searchable) {
            searchableColumns.push(column.column);
        }
    });

    useEffect(() => {
        console.log(DynamicDataTable);
    }, [DynamicDataTable]);


    return (
        <>
            {/*Display the search bar*/}
            <div className="rsssl-search-bar">
                <div className="rsssl-search-bar__inner">
                    <div className="rsssl-search-bar__icon"></div>
                    <input
                        type="text"
                        className="rsssl-search-bar__input"
                        placeholder={__("Search", "really-simple-ssl")}
                        onChange={event => handleTableSearch(event.target.value, searchableColumns)}
                    />
                </div>
            </div>
            {/*Display the datatable*/}
            <DataTable
                columns={columns}
                data={DynamicDataTable}
                dense
                pagination
                paginationServer
                // paginationTotalRows={pagination.totalRows}
                onChangeRowsPerPage={handleTableRowsChange}
                onChangePage={handleTablePageChange}
                sortServer
                onSort={handleTableSort}
                paginationRowsPerPageOptions={[10, 25, 50, 100]}
                noDataComponent={__("No results", "really-simple-ssl")}
                persistTableHead
                theme="really-simple-plugins"
                customStyles={customStyles}
            ></DataTable>
        </>
    );

}
export default DynamicDataTable;

function buildColumn(column) {
    return {
        name: column.name,
        sortable: column.sortable,
        searchable: column.searchable,
        width: column.width,
        visible: column.visible,
        column: column.column,
        selector: row => row[column.column],
    };
}