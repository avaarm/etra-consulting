import React from 'react';
import { FiActivity, FiFileText} from "react-icons/fi";
import { GiMedicalDrip} from "react-icons/gi";
import { FaBookMedical} from "react-icons/fa";
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        icon: <FiActivity />,
        title: 'Technology Transfer',
        description: 'Bringing research to reality by providing a time tested preclinical and clinical trial technology transfer platform.'
    },
    {
        icon: <FiFileText />,
        title: 'Quality',
        description: 'Providing full support of compliance and regulatory requirements for cell therapy products.'
    },
    {
        icon: <FaBookMedical/>,
        title: 'Auditing',
        description: 'Auditing of the clinical space and procedures followed.'
    },
    {
        icon: <GiMedicalDrip />,
        title: 'Analysis and Support',
        description: 'Continued analysis and support throughout the clinical trial process of the product.'
    },
    {
        icon: <FiFileText />,
        title: 'FDA Communications',
        description: 'Facilitating and initiating FDA communication throughout the trial process.'
    },
    {
        icon: <FiFileText />,
        title: 'Cost Analysis',
        description: 'Estimated cost analysis of the trial process for products, instruments, staff, and GMP facility.'
    },
]

const ServiceOne = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="icon">
                                {val.icon}
                            </div>
                            <div className="content">
                                <h4 className="title w-600"><Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
                                <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceOne;