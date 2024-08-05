import { Title } from "../common/Title";
import HobbyData from "../../constant/hobby-data";

const Hobby = () => {
    return (
        <div className="hobbies-sc resume-block">
            <div className="container">
                <div className="hobbies-content dotted-border-left">
                    <Title titleText={"Hobbies & Interests"} />
                    <div className="hobbies-list flex items-center flex-wrap">
                        {
                            HobbyData.map(
                                (item) => (
                                    <HobbyItem item={item} />
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hobby;

const HobbyItem = ({ item }) => {
    return (
        <div className="hobbies-item items-center">
            <div className="hobbies-icon">
                <img src={item.icon} alt="" />
            </div>
            <div className="hobbies-text text-center">{item.name}</div>
        </div>
    )
}
