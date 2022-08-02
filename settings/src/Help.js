import {Component, Fragment, useEffect, useState} from "@wordpress/element";
/**
 * Render a help notice in the sidebar
 */

const Help = ({key, index, help, fieldId}) => {
    const [notice, setNotice] = useState(help)
    
    useEffect(() => {
        if ( !notice.title ){
            notice.title = notice.text;
            notice.text = false;
            setNotice({
                ...notice,
                title: notice.text,
                text: false
            })
        }
    }, [notice])


    return (
        <Fragment>
            { notice.title && notice.text &&
                <details className={"rsssl-wizard-help-notice rsssl-" + notice.label.toLowerCase()}>
                    <summary>{notice.title}</summary>
                    {notice.text}
                </details>
            }
            { notice.title && !notice.text &&
                <div className={"rsssl-wizard-help-notice  rsssl-" + notice.label.toLowerCase()}><p>{notice.title}</p></div>
            }
        </Fragment>

    );
}

// class Help extends Component {
//     handleClick(id){
//         let el = document.querySelector('[data-help_index="'+id+'"]');
//         if (el.classList.contains('rsssl-wizard__help_open')) {
//             el.classList.remove('rsssl-wizard__help_open');
//         } else {
//             el.classList.add('rsssl-wizard__help_open');
//         }
//     }
//     render(){
//         let notice = this.props.help;
//         if ( !notice.title ){
//             notice.title = notice.text;
//             notice.text = false;
//         }
//         return (
//             <Fragment>
//                 { notice.title && notice.text &&
//                     <details className={"rsssl-wizard-help-notice rsssl-" + notice.label.toLowerCase()}>
//                         <summary>{notice.title}</summary>
//                         {notice.text}
//                     </details>
//                 }
//                 { notice.title && !notice.text &&
//                     <div className={"rsssl-wizard-help-notice  rsssl-" + notice.label.toLowerCase()}><p>{notice.title}</p></div>
//                 }
//             </Fragment>
//
//         );
//     }
// }

export default Help