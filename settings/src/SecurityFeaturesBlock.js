import {
    Component,
} from '@wordpress/element';

import Placeholder from './Placeholder';
import SecurityFeatureBullet from "./SecurityFeatureBullet";

const SecurityFeaturesBlock = ({fields}) => {
    if ( fields.length === 0 ) {
        return (
            <Placeholder></Placeholder>
        );
    }

    fields = fields.filter( field => field.new_features_block===true );

    return (
        <div>
            {fields.map((field, i) => <SecurityFeatureBullet key={i} index={i} field={field} fields={fields}/>)}
        </div>
    );
}

// class SecurityFeaturesBlock extends Component {
//     constructor() {
//         super( ...arguments);
//
//     }
//     componentDidMount() {
//
//     }
//
//     render(){
//
//         if ( this.props.fields.length==0 ) {
//             return (
//                 <Placeholder></Placeholder>
//             );
//         }
//
//         let fields = this.props.fields;
//         fields = fields.filter( field => field.new_features_block===true );
//         return (
//             <div>
//                 {fields.map((field, i) => <SecurityFeatureBullet key={i} index={i} field={field} fields={fields}/>)}
//             </div>
//         );
//     }
// }
export default SecurityFeaturesBlock;