import {Component} from "@wordpress/element";
import { __ } from '@wordpress/i18n';
import {runTest} from "./utils/api";
import * as rsssl_api from "./utils/api";
import {useContext, useEffect, useState} from "react";
import DashboardContext from "./contexts/DashboardContext";

const Modal = () => {
    const { modalData, setModalData, handleModal } = useContext(DashboardContext);
    const [ buttonsDisabled, setButtonsDisabled ] = useState(false);

    useEffect(() => {
        setButtonsDisabled(false);
    }, [modalData]);

    const dismissModal = (dropItem) => {
        handleModal(false, null, dropItem);
    }

    const handleFix = async (e) => {
        //set to disabled
        let { action } = modalData;
        setButtonsDisabled(true);

        const response = await rsssl_api.runTest(action, 'refresh', modalData);

        modalData.description = response.data.msg;
        modalData.subtitle = '';

        setModalData(modalData);

        if(response.data.success) {
            dismissModal(modalData);
        }
    }

    return (
        <div>
            <div className="rsssl-modal-backdrop" onClick={ (e) => dismissModal(e) }>&nbsp;</div>
            <div className="rsssl-modal" id="{id}">
                <div className="rsssl-modal-header">
                    <h2 className="modal-title">
                        {modalData.title}
                    </h2>
                    <button type="button" className="rsssl-modal-close" data-dismiss="modal" aria-label="Close" onClick={ (e) => dismissModal(e) }>
                        <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="24" >
                            <path fill="#000000" d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
                        </svg>
                    </button>
                </div>
                <div className="rsssl-modal-content">
                    {modalData.subtitle && <div className="rsssl-modal-subtitle">{modalData.subtitle}</div>}
                    { Array.isArray(modalData.description) && modalData.description.map((s) => <div className="rsssl-modal-description">{s}</div> ) }
                </div>
                <div className="rsssl-modal-footer">
                    { modalData.edit && <a href={modalData.edit} target="_blank" className="button button-secondary">{__("Edit", "really-simple-ssl")}</a>}
                    { modalData.help && <a href={modalData.help} target="_blank"  className="button rsssl-button-help">{__("Help", "really-simple-ssl")}</a>}
                    { (!modalData.ignored && modalData.action==='ignore_url') && <button disabled={buttonsDisabled ? 'disabled' : ''} className="button button-primary" onClick={ (e) => handleFix(e) }>{ __("Ignore", "really-simple-ssl")}</button>}
                    { modalData.action!=='ignore_url' &&  <button disabled={buttonsDisabled ? 'disabled' : ''} className="button button-primary" onClick={ (e) => handleFix(e) }>{__("Fix", "really-simple-ssl")}</button> }
                </div>
            </div>
        </div>
    )
}

// class Modal extends Component {
//     constructor() {
//         super( ...arguments );
//         this.state = {
//             data:[],
//             buttonsDisabled:false,
//         };
//     }
//
//     dismissModal(dropItem){
//         this.props.handleModal(false, null, dropItem);
//     }
//     componentDidMount() {
//         this.setState({
//             data:this.props.data,
//             buttonsDisabled:false,
//         });
//     }
//
//     handleFix(e){
//         //set to disabled
//         let action = this.props.data.action;
//         this.setState({
//             buttonsDisabled:true
//         });
//         rsssl_api.runTest(action, 'refresh', this.props.data ).then( ( response ) => {
//             this.props.data
//             let {
//                 data,
//             } = this.state;
//             data.description = response.data.msg;
//             data.subtitle = '';
//             this.setState({
//                 data: data,
//             });
//             let item = this.props.data;
//             if (response.data.success) {
//                 this.dismissModal(this.props.data);
//             }
//         });
//     }
//
//     render(){
//         const {
//             data,
//             buttonsDisabled,
//         } = this.state;
//         console.log(data);
//         let disabled = buttonsDisabled ? 'disabled' : '';
//         let description = modalData.description;
//
//         return (
//             <div>
//                 <div className="rsssl-modal-backdrop" onClick={ (e) => this.dismissModal(e) }>&nbsp;</div>
//                 <div className="rsssl-modal" id="{id}">
//                     <div className="rsssl-modal-header">
//                         <h2 className="modal-title">
//                             {data.title}
//                         </h2>
//                         <button type="button" className="rsssl-modal-close" data-dismiss="modal" aria-label="Close" onClick={ (e) => this.dismissModal(e) }>
//                             <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="24" >
//                                 <path fill="#000000" d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
//                             </svg>
//                         </button>
//                     </div>
//                     <div className="rsssl-modal-content">
//                         {data.subtitle && <div className="rsssl-modal-subtitle">{data.subtitle}</div>}
//                         { Array.isArray(description) && description.map(s=><div className="rsssl-modal-description">{s}</div>) }
//                     </div>
//                     <div className="rsssl-modal-footer">
//                         { data.edit && <a href={data.edit} target="_blank" className="button button-secondary">{__("Edit", "really-simple-ssl")}</a>}
//                         { data.help && <a href={data.help} target="_blank"  className="button rsssl-button-help">{__("Help", "really-simple-ssl")}</a>}
//                         { (!data.ignored && data.action==='ignore_url') && <button disabled={disabled} className="button button-primary" onClick={ (e) => this.handleFix(e) }>{ __("Ignore", "really-simple-ssl")}</button>}
//                         { data.action!=='ignore_url' &&  <button disabled={disabled} className="button button-primary" onClick={ (e) => this.handleFix(e) }>{__("Fix", "really-simple-ssl")}</button> }
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

export default Modal;