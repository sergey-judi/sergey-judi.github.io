import { Title } from "../common/Title";
import SkillData from "../../constant/skill-data";

const Skill = () => {
    return (
        <div className="skill-sc resume-block">
            <div className="container">
                <div className="skill-content dotted-border-left">
                    <Title titleText={"Skills"} />
                    <div className="skill-list grid">
                        {
                            SkillData.map(
                                (skill) => (
                                    <SkillItem skill={skill} />
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skill;

const SkillItem = ({ skill }) => {
    return (
        <div className="skill-item text-center flex-col items-center justify-center" key={skill.id}>
            <div className="skill-icon">
                <img src={skill.icon} alt="skill-icon" />
            </div>
            <div className="skill-info">
                <h3 className="skill-name">{skill.name}</h3>
            </div>
        </div>
    );
}
