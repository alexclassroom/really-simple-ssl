/**
 * using the gridbutton generates a button which will refresh the gridblock when clicked
 * The onclick action triggers the getBlockData method
 *
 */

const GridButton = ({disabled, onClick, text}) => {
    return (
        <button className="button-primary" disabled={disabled ? 'disabled' : ''} onClick={onClick}>{text}</button>
    );
}

export default GridButton;