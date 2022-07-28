const SecurityFeatureBullet = ({field}) => {
    let bulletClassName = field.value === 1 ? 'rsssl-bullet rsssl-bullet-success' : 'rsssl-bullet rsssl-bullet-error';
    return (
        <div className="rsssl-new-feature">
            <div className={bulletClassName}></div>
            <div className="rssl-new-feature-label">{field.label}</div>
        </div>
    );
}

export default SecurityFeatureBullet;