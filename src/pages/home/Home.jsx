import Education from "../../components/education/Education";
import Experience from "../../components/experience/Experience";
import Header from "../../components/header/Header";
import Skill from "../../components/skill/Skill";

const Home = () => {
    return(
        <div className="page-container">
            <Header />
            <Experience />
            <Education />
            <Skill />
        </div>
    )
}

export default Home;
