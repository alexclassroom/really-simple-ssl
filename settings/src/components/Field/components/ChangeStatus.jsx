import { __ } from '@wordpress/i18n';

const ChangeStatus = ({ item, onChangeHandlerDataTable }) => {
    const { status } = item;
    let statusClass = status === 1 ? 'rsssl-status-allowed' : 'rsssl-status-revoked';
    let label = status === 1 ? __("Revoke", "really-simple-ssl") : __("Allow", "really-simple-ssl");
    return (
        <button onClick={ () => onChangeHandlerDataTable(!status, item, 'status' ) } className={statusClass}>
            {label}
        </button>
    )
}

export default ChangeStatus;