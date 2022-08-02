const SecurityFeatureBullet = ({field}) => {
    return (
        <div className="rsssl-new-feature">
            <div className={field.value === 1 ? 'rsssl-bullet rsssl-bullet-success' : 'rsssl-bullet rsssl-bullet-error'}></div>
            <div className="rssl-new-feature-label">{field.label}</div>
        </div>
    );
}

export default SecurityFeatureBullet;