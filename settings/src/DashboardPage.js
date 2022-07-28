import {Component, Fragment} from "@wordpress/element";
import GridBlock from "./GridBlock";
import {useEffect, useState} from "react";

const DashboardPage = () => {
    const [blocks, setBlocks] = useState([]);

    useEffect(() => {
        const blocksFromApi = rsssl_settings.blocks;
        setBlocks(blocksFromApi);
    })

    return (
        <Fragment>
            { blocks.map((block, i) =>
                <GridBlock key={i} block={block}/>
            )}
        </Fragment>
    )
}

// class DashboardPage extends Component {
//     constructor() {
//         super( ...arguments );
//     }
//
//     render() {
//         let blocks = rsssl_settings.blocks;
//         return (
//             <Fragment>
//                 { blocks.map((block, i) =>
//                     <GridBlock
//                         key={i}
//                         block={block}
//                         isApiLoaded={this.props.isAPILoaded}
//                         fields={this.props.fields}
//                         highLightField={this.props.highLightField}
//                     />
//                 )}
//             </Fragment>
//         );
//     }
// }
export default DashboardPage