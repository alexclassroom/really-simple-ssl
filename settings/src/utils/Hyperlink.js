import {Component} from "@wordpress/element";

class Hyperlink extends Component {
    constructor() {
        super( ...arguments );
    }
    render(){
        let label_pre = '';
        let label_post = '';
        let link_text = '';
        if (this.props.text.indexOf('%s')!==-1) {
            let parts = this.props.text.split(/%s/);
            label_pre = parts[0];
            link_text = parts[1];
            label_post = parts[2];
        } else {
            link_text = this.props.text;
        }
        let className = this.props.className ? this.props.className : 'rsssl-link';
        return (
            <div>{ label_pre } <a className={className} target={this.props.target} href={this.props.url}>{link_text}</a>{label_post}</div>
        )
    }
}
export default Hyperlink;