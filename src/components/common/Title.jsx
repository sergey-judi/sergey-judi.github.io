const Title = ({ titleText }) => {
    return (
        <div className="title flex items-center">
            <div className="dots-shape"></div>
            <h3>{titleText}</h3>
        </div>
    )
};

const SubTitle = ({ subTitleText }) => {
    return (
        <div className="sub-title flex items-center">
            <div className="sub-dots-shape"></div>
            <h5>{subTitleText}</h5>
        </div>
    )
};

export {
    Title,
    SubTitle
};
