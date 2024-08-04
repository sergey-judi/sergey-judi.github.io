import { Title } from "../common/Title";
import CertificateData from "../../constant/certificate-data";

const Certificate = () => {
    return (
        <div className="cert-course-sc resume-block">
            <div className="container">
                <div className="cert-course-content dotted-border-left">
                    <Title titleText={"Certificates & Courses"} />
                    <div className="cert-course-list grid">
                        {
                            CertificateData.map(
                                (certificateItem) => (
                                    <CertificateCourseItem item={certificateItem} />
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certificate;

const CertificateCourseItem = ({ item }) => {
    return (
        <div className="cert-course-item grid items-center">
            <div className="cert-course-icon">
                <img src={item.icon} alt="" />
            </div>
            <div className="cert-course-info grid">
                <div className="cert-course-info-l">
                    <p className="cert-course-provider">{item.provider}</p>
                    <h3 className="cert-course">{item.course}</h3>
                </div>

                {
                    item.issueDate ? (
                        <div className="cert-course-info-r flex items-center justify-end">
                            {item.issueDate}
                        </div>
                    ) : (
                        <div className="cert-course-info-r flex items-center justify-end">
                            {item.startDate} - {item.endDate || "Present"}
                        </div>
                    )
                }
            </div>
        </div>
    );
};