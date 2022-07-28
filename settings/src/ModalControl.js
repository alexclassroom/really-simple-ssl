import {Component} from "@wordpress/element";
import {useContext} from "react";
import DashboardContext from "./contexts/DashboardContext";

const ModalControl = ({modalData, btnText}) => {
    const { handleModal } = useContext(DashboardContext);

    const onClickHandler = () => {
        handleModal(true, modalData)
    }

    return (
        <button onClick={ (e) => onClickHandler(e) }>{btnText}</button>
    )
}

// class ModalControl extends Component{
//     constructor() {
//         super( ...arguments );
//     }
//     componentDidMount() {
//         this.onClickHandler = this.onClickHandler.bind(this);
//     }
//
//     onClickHandler(){
//         this.props.handleModal(true, this.props.modalData );
//     }
//
//     render(){
//         return (
//             <button onClick={ (e) => this.onClickHandler(e) }>{this.props.btnText}</button>
//         )
//     }
// }
export default ModalControl