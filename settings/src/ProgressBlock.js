import { __ } from '@wordpress/i18n';
import {
    Component,
} from '@wordpress/element';

import * as rsssl_api from "./utils/api";

import TaskElement from "./TaskElement";
import Placeholder from './Placeholder';
import {useContext, useEffect, useState} from "react";
import DashboardContext from "./contexts/DashboardContext";

const ProgressBlock = ({setBlockProps, BlockProps}) => {
    const {highLightField} = useContext(DashboardContext);
    const [percentageCompleted, setPercentageCompleted] = useState(0)
    const [progressText, setProgressText] = useState('')
    let [filter, setFilter] = useState('all')
    let [notices, setNotices] = useState(null)
    const [progressLoaded, setProgressLoaded] = useState(false)

    useEffect(() => {
        getProgressData().then(( response ) => {
            setProgressText(response.text)
            setFilter(response.filter)
            setPercentageCompleted(response.percentage)
            setNotices(response.notices);
            setProgressLoaded(true);
            setBlockProps('notices', response.notices);
        });
    }, [])

    const getStyles = () => {
        return Object.assign(
            {},
            {width: percentageCompleted+"%"},
        );
    }
    const getProgressData = () => {
        return rsssl_api.runTest('progressData', 'refresh').then( ( response ) => {
            return response.data;
        });
    }

    const onCloseTaskHandler = (e) => {
        let button = e.target.closest('button');
        let type = button.getAttribute('data-id');
        let container = button.closest('.rsssl-task-element');
        container.animate({
            marginLeft: ["0px", "-1000px"]
        }, {
            duration: 500,
            easing: "linear",
            iterations: 1,
            fill: "both"
        }).onfinish = function() {
            container.parentElement.removeChild(container);
        }

        let notices = BlockProps.notices;
        notices = notices.filter(function (notice) {
            return notice.id !== type;
        });

        setBlockProps('notices', notices);
        return rsssl_api.runTest('dismiss_task', type).then(( response ) => {
            setPercentageCompleted(response.data.percentage);
        });
    }

    let progressBarColor = '';
    if ( percentageCompleted < 80 ) {
        progressBarColor += 'rsssl-orange';
    }
    if ( !progressLoaded ) {
        return (
            <Placeholder lines='9'></Placeholder>
        );
    }

    if (BlockProps && BlockProps.filterStatus) {
        filter = BlockProps.filterStatus;
    }

    if (filter === 'remaining') {
        notices = notices.filter(function (notice) {
            return notice.output.status==='open';
        });
    }

    return (
        <div className="rsssl-progress-block">
            <div className="rsssl-progress-bar">
                <div className="rsssl-progress">
                    <div className={'rsssl-bar ' + progressBarColor} style={getStyles()}></div>
                </div>
            </div>

            <div className="rsssl-progress-text">
                    <span className="rsssl-progress-percentage">
                        {percentageCompleted}%
                    </span>
                <span className="rsssl-progress-text-span">
                        {progressText}
                    </span>
            </div>

            <div className="rsssl-scroll-container">
                {notices.map((notice, i) => <TaskElement key={i} index={i} notice={notice} onCloseTaskHandler={onCloseTaskHandler} highLightField={highLightField}/>)}
            </div>

        </div>
    );
}

// class ProgressBlock extends Component {
//     constructor() {
//         super( ...arguments);
//         this.percentageCompleted = 0;
//         this.progressText = '';
//         this.filter = 'all';
//         this.notices = null;
//         this.progressLoaded = false;
//         this.state = {
//             progressText:'',
//             filter:'all',
//             notices:null,
//             percentageCompleted:0,
//             progressLoaded: false,
//         };
//
//         this.getProgressData().then(( response ) => {
//             this.progressText = response.text;
//             this.filter = response.filter;
//             this.percentageCompleted = response.percentage;
//             this.notices = response.notices;
//             this.progressLoaded = true;
//             this.setState({
//                 progressLoaded: this.progressLoaded,
//                 progressText: this.progressText,
//                 filter: this.filter,
//                 notices: this.notices,
//                 percentageCompleted: this.percentageCompleted,
//             });
//             this.props.setBlockProps('notices', this.notices);
//         });
//     }
//     componentDidMount() {
//         this.getProgressData = this.getProgressData.bind(this);
//         this.onCloseTaskHandler = this.onCloseTaskHandler.bind(this);
//     }
//     getStyles() {
//         return Object.assign(
//             {},
//             {width: this.percentageCompleted+"%"},
//         );
//     }
//     getProgressData(){
//         return rsssl_api.runTest('progressData', 'refresh').then( ( response ) => {
//             return response.data;
//         });
//     }
//     onCloseTaskHandler(e){
//         let button = e.target.closest('button');
//         let type = button.getAttribute('data-id');
//         let container = button.closest('.rsssl-task-element');
//         container.animate({
//             marginLeft: ["0px", "-1000px"]
//         }, {
//             duration: 500,
//             easing: "linear",
//             iterations: 1,
//             fill: "both"
//         }).onfinish = function() {
//             container.parentElement.removeChild(container);
//         }
//
//         let notices = this.props.BlockProps.notices;
//         notices = notices.filter(function (notice) {
//             return notice.id !== type;
//         });
//
//         this.props.setBlockProps('notices', notices);
//         return rsssl_api.runTest('dismiss_task', type).then(( response ) => {
//             this.percentageCompleted = response.data.percentage;
//             this.setState({
//                 percentageCompleted:this.percentageCompleted
//             })
//         });
//     }
//     render(){
//         let progressBarColor = '';
//         if ( this.percentageCompleted<80 ) {
//             progressBarColor += 'rsssl-orange';
//         }
//         if ( !this.progressLoaded ) {
//             return (
//                 <Placeholder lines='9'></Placeholder>
//             );
//         }
//         let filter = 'all';
//         if ( this.props.BlockProps && this.props.BlockProps.filterStatus ) {
//             filter = this.props.BlockProps.filterStatus;
//         }
//         let notices = this.notices;
//         if ( filter==='remaining' ) {
//             notices = notices.filter(function (notice) {
//                 return notice.output.status==='open';
//             });
//         }
//
//         return (
//             <div className="rsssl-progress-block">
//                 <div className="rsssl-progress-bar">
//                     <div className="rsssl-progress">
//                         <div className={'rsssl-bar ' + progressBarColor} style={this.getStyles()}></div>
//                     </div>
//                 </div>
//
//                 <div className="rsssl-progress-text">
//                     <span className="rsssl-progress-percentage">
//                         {this.percentageCompleted}%
//                     </span>
//                     <span className="rsssl-progress-text-span">
//                         {this.progressText}
//                     </span>
//                 </div>
//
//                 <div className="rsssl-scroll-container">
//                     {notices.map((notice, i) => <TaskElement key={i} index={i} notice={notice} onCloseTaskHandler={this.onCloseTaskHandler} highLightField={this.props.highLightField}/>)}
//                 </div>
//
//             </div>
//         );
//     }
// }
export default ProgressBlock;
