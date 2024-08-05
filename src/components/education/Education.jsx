import EducationData from "../../constant/education-data";
import { Title } from "../common/Title";

const Education = () => {
    return (
        <div className="education-sc resume-block">
            <div className="container">
                <div className="education-content dotted-border-left">
                    <Title titleText={"Education"} />

                    <div className="education-list grid">
                        {
                            EducationData.map(
                                (educationItem) => (
                                    <EducationItem item={educationItem} />
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Education;

const EducationItem = ({ item }) => {
    return (
        <div className="education-item">
            <div className="edu-title flex items-center">
                <img src={item.icon} alt={item.course} className="edu-icon" />
                <h3 className="edu-course">{item.course}</h3>
            </div>
            <p className="edu-info text">
                {item.institution}
                <br></br>
                <p className="edu-info-date text">
                    {item.startDate} - {item.endDate || "Present"}
                </p>
            </p>
        </div>
    )
}
