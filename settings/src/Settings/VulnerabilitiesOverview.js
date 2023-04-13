import {__} from '@wordpress/i18n';
import useVulnerabilityData from "../Dashboard/Vulnerabilities/VulnerabilityData";
import React, {useEffect, useContext} from 'react';
import DataTable from "react-data-table-component";
import Icon from "../utils/Icon";
import useFields from "./FieldsData";
import {Button} from "@wordpress/components";
import VulnerabilitiesIntro from "./VulnerabilitiesIntro";

const VulnerabilitiesOverview = (props) => {
    const {
        dataLoaded,
        vulList,
        vulEnabled,
        firstRun,
        fetchVulnerabilities,
        deactivateVulnerabilityScanner,
        activateVulnerabilityScanner,
        loading,
    } = useVulnerabilityData();

    const {
        fields,
        changedFields,
    } = useFields();

    //first we set up the data.
    useEffect(() => {
        const run = async () => {
            await fetchVulnerabilities();
        }
        run();
    }, []);

    //we create the columns
    let columns = [];
    //getting the fields from the props
    let field = props.field;


    function buildColumn(column) {
        return {
            name: column.name,
            sortable: column.sortable,
            width: column.width,
            visible: column.visible,
            selector: row => row[column.column],
        };
    }

    field.columns.forEach(function (item, i) {
        let newItem = buildColumn(item)
        columns.push(newItem);
    });

    //The data is loaded but we keep an eye on the changed fields
    useEffect(() => {
        //we loop through the changed fields and check if the vulnerability scanner is disabled
        changedFields.forEach(function (item, i) {
            if (item.id === 'enable_vulnerability_scanner' && item.value === false) {
                const deactivate = async () => {
                    await deactivateVulnerabilityScanner();
                }
                deactivate();

            } else if (item.id === 'enable_vulnerability_scanner' && item.value === true ) {
                //we activate the vulnerability scanner
                const run = async () => {
                    await activateVulnerabilityScanner();
                    await fetchVulnerabilities();
                }
                run();
            }
        });
    }, [changedFields]);

    if (dataLoaded) {
        //We know the data is loaded, so things can go on
        if (!vulEnabled) {
            return (
                //If vulnerabilities scanner is disabled we show some dummy data behind a mask
                <>
                    <DataTable
                        columns={columns}
                        //  data={dummyData}
                        dense
                        pagination
                        noDataComponent={__("No results", "really-simple-ssl")}
                        persistTableHead
                        //     customStyles={customStyles}
                    >
                    </DataTable>
                    <div className="rsssl-locked">
                        <div className="rsssl-locked-overlay"><span
                            className="rsssl-task-status rsssl-open">{__('Disabled', 'really-simple-ssl')}</span><span>{__('Activate vulnerability scanning to enable this block.', 'really-simple-ssl')}</span>
                        </div>
                    </div>
                </>
            )
        }

        //if the Vulnerability scanner is enabled and the first run is set to false we show the intro
        if (vulEnabled && !firstRun) {
            return (
                <VulnerabilitiesIntro/>
            )
        }
        let data = vulList;

        //we need to add a key to the data called action wich produces the action buttons


        if (typeof data === 'object') {
            //we make it an array
            data = Object.values(data);
        }
        const btnStyle = {
            marginLeft: '10px'
        }
        data.forEach(function (item, i) {
            let rsssid = item.rss_identifier;
            item.vulnerability_action = <div className="rsssl-vulnerability-action">
                <a className="button" href={"https://really-simple-ssl.com/vulnerabilities/" + rsssid}
                   target={"_blank"}>{__("Details", "really-simple-ssl")}</a>
                <a target={"_blank"} href="/wp-admin/plugins.php?plugin_status=upgrade" className="button button-primary"
                   style={btnStyle}>{__("View", "really-simple-ssl")}</a>
            </div>

        });
        return (
                <DataTable
                    columns={columns}
                    data={data}
                    dense
                    pagination
                    noDataComponent={__("No results", "really-simple-ssl")}
                    persistTableHead
                >
                </DataTable>
        )

    }
    if (loading) {
        //we display a text that the data is loading
        return (
            <div className="rsssl-loading">
                <Icon name="loading" size="40"/>
                <p>{__('Loading data...', 'really-simple-ssl')}</p>
            </div>
        )
    }
}

export default VulnerabilitiesOverview;