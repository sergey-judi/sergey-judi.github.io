import ExperienceData from "../../constant/experience-data";
import { Title, SubTitle } from "../common/Title";

const Experience = () => {
    return (
        <div className="experience-sc resume-block">
            <div className="container">
                <div className="experience-content dotted-border-left">
                    <Title titleText={"Experience"} />
                    <div className="experience-list grid">
                        {
                            ExperienceData.map(
                                (experienceItem) => (
                                    <ExperienceItem key={experienceItem.id} item={experienceItem} />
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;

const ExperienceItem = ({ item }) => {
    return (
        <div className="experience-item" key={item.id}>
            <div className="exp-time flex items-center">
                <span className="start-time">{item.startDate}</span>
                <span>-</span>
                <span className="end-time">{item.endDate || "Present"}</span>
            </div>

            <div className="exp-position flex items-center flex-wrap">
                <p className="exp-position-text">{item.position}</p>
            </div>

            <div className="exp-company flex items-center flex-wrap">
                <div className="company-logo">
                    <img src={item.company.logo} alt="company-logo" />
                </div>
                <p className="company-name">{item.company.name}</p>
                <p className="company-location text">{item.company.location}</p>
            </div>

            <div className="sub-experience-container">
                <div className="sub-experience-list grid sub-dotted-border-left">
                    {
                        item.subExperience && item.subExperience.map(
                            (subExperienceItem) => (
                                <SubExperienceItem key={subExperienceItem.id} subItem={subExperienceItem} />
                            )
                        )
                    }
                </div>
            </div>

            <p className="exp-description text">{item.description}</p>
            <div>
                <p className="exp-description text">Tech stack:</p>
                <ul className="exp-tech-stack grid text-white">
                    {
                        item.techStack.map(
                            (skill) => (
                                <li className="exp-tech-stack-item">
                                    <p className="info-item-text">
                                        <span className="text">{skill}</span>
                                    </p>
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
        </div>
    );
}

const SubExperienceItem = ({ subItem }) => {
    return (
        <div className="sub-experience-item" key={subItem.id}>
            <div className="sub-exp-time flex items-center">
                <span className="start-time">{subItem.startDate}</span>
                <span>-</span>
                <span className="end-time">{subItem.endDate || "Present"}</span>
            </div>

            <div className="exp-position flex items-center flex-wrap">
                <SubTitle subTitleText={subItem.position} />
            </div>
        </div>
    );
}
