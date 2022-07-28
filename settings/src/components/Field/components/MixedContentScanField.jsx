import DataTable from "react-data-table-component";
import {
    PanelBody,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import * as rsssl_api from "../../../utils/api";
import ModalControl from "../../../ModalControl";
import {useEffect, useState} from "react";

const MixedContentScanField = ({ dropItemFromModal, handleModal, field, fields }) => {
    const [nonce, setNonce] = useState('');
    let [data, setData] = useState([]);
    let [progress, setProgress] = useState(0);
    const [action, setAction] = useState('');
    const [state, setState] = useState('stop');
    const [paused, setPaused] = useState(false);
    const [showIgnoredUrls, setShowIgnoredUrls] = useState(false);
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

    useEffect(() => {
        let data = [];
        let progress = 0;
        let action = '';
        let state = 'stop';
        let nonce = '';
        if (field.value.data) {
            data = field.value.data;
        }
        if (field.value.progress) {
            progress = field.value.progress;
        }
        if (field.value.action) {
            action = field.value.action;
        }
        if (field.value.state) {
            state = field.value.state;
        }
        if (field.value.nonce) {
            nonce = field.value.nonce;
        }
        setData(data);
        setProgress(progress);
        setAction(action)
        setState(state);
        setNonce(nonce);
    });

    const start = (e) => {
        //add start_full option
        let state = 'start';
        if ( paused ) {
            state = 'running';
        }
        setState(state);
        setPaused(false);

        rsssl_api.runTest('mixed_content_scan', state ).then( ( response ) => {
            setData(response.data.data)
            setProgress(response.data.progress)
            setAction(response.data.action)
            setState(response.data.state)
            if ( response.data.state==='running' ){
                run();
            }
        });
    }

    const run = (e) => {
        if ( paused ) {
            return;
        }
        rsssl_api.runTest('mixed_content_scan', 'running' ).then( ( response ) => {
            setData(response.data.data)
            setProgress(response.data.progress)
            setAction(response.data.action)
            setState(response.data.state)
            //if scan was stopped while running, set it to stopped now.
            if ( paused ) {
                stop();
            } else if ( response.data.state === 'running' ) {
                run();
            }

        });
    }

    const toggleIgnoredUrls = (e) => {
        setShowIgnoredUrls(!showIgnoredUrls);
    }

    const stop = (e) => {
        setState('stop');
        setPaused(true);
        rsssl_api.runTest('mixed_content_scan', 'stop' ).then( ( response ) => {
            setData(response.data.data)
            setProgress(response.data.progress)
            setAction(response.data.action)
        });
    }

    /**
     * After an update, remove an item from the data array
     * @param removeItem
     */
    const removeDataItem = (removeItem) => {
        const updatedData = data.filter(
            item => item.id === removeItem.id,
        );
        setData(updatedData);
    }

    const columns = [];
    field.columns.forEach(function(item, i) {
        let newItem = {
            name: item.name,
            width: item.width,
            sortable: item.sortable,
            selector: row => row[item.column],
        }
        columns.push(newItem);
    });

    if (typeof data === 'object') {
        data = Object.values(data);
    }
    if (!Array.isArray(data) ) {
        data = [];
    }
    let dropItem = dropItemFromModal;
    for (const item of data) {
        item.warningControl = <span className="rsssl-warning">{__("Warning", "really-simple-ssl")}</span>
        //@todo check action for correct filter or drop action.
        if ( dropItem && dropItem.url === item.blocked_url ) {
            if (dropItem.action==='ignore_url'){
                item.ignored = true;
            } else {
                item.fixed = true;
            }
        }
        //give fix and details the url as prop
        if (item.fix) {
            item.fix.url = item.blocked_url;
            item.fix.nonce = nonce;
        }
        if (item.details) {
            item.details.url = item.blocked_url;
            item.details.nonce = nonce;
            item.details.ignored = item.ignored;
        }
        if (item.location.length > 0) {
            if (item.location.indexOf('http://') !== -1 || item.location.indexOf('https://') !== -1) {
                item.locationControl =
                    <a href={item.location} target="_blank">{__("View", "really-simple-ssl")}</a>
            } else {
                item.locationControl = item.location;
            }
        }
        item.detailsControl = item.details && <ModalControl removeDataItem={removeDataItem}
                                                            item={item}
                                                            btnText={__("Details", "really-simple-ssl")}
                                                            modalData={item.details}/>;
        item.fixControl = item.fix && <ModalControl removeDataItem={removeDataItem}
                                                    item={item}
                                                    btnText={__("Fix", "really-simple-ssl")}
                                                    modalData={item.fix}/>;
    }

    if ( !showIgnoredUrls ) {
        data = data.filter(
            item => !item.ignored,
        );
    }

    //filter also recently fixed items
    data = data.filter(
        item => !item.fixed,
    );

    progress+='%';
    let startDisabled = state === 'running';
    let stopDisabled = state !== 'running';

    return (
        <div>
            <div className="rsssl-progress-container">
                <div className="rsssl-progress-bar" style={{width: progress}} ></div>
            </div>
            <span className="rsssl-current-scan-action">{state==='running' && action}</span>
            <PanelBody>
                <DataTable
                    columns={columns}
                    data={data}
                    dense
                    pagination
                    paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                    noDataComponent={__("No results", "really-simple-ssl")} //or your component
                    // subHeader
                    // subHeaderComponent=<SubHeaderComponentMemo/>
                />
            </PanelBody>
            <button className="button" disabled={startDisabled} onClick={ (e) => start(e) }>{__("Scan","really-simple-ssl-pro")}</button>
            <button className="button" disabled={stopDisabled} onClick={ (e) => stop(e) }>{__("Pause","really-simple-ssl-pro")}</button>
            <label>{__("Show ignored URLs")}
                <input value={showIgnoredUrls} type="checkbox" id="rsssl_show_ignored_urls" onClick={ (e) => toggleIgnoredUrls(e) } />
            </label>

        </div>
    );
}

export default MixedContentScanField;