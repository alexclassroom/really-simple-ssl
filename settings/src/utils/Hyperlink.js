import {Component} from "@wordpress/element";

const Hyperlink = ({text, url, target}) => {
    let parts = text.split(/%s/);
    return (
        <span>{ parts[0] } <a target={target} href={url}>{parts[1]}</a>{parts[2]}</span>
    )
}

// class Hyperlink extends Component {
//     constructor() {
//         super( ...arguments );
//     }
//     render(){
//         let parts = this.props.text.split(/%s/);
//         return (
//             <span>{ parts[0] } <a target={this.props.target} href={this.props.url}>{parts[1]}</a>{parts[2]}</span>
//         )
//     }
// }
export default Hyperlink;