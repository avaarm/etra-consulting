import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";

const TimelineData = [
    {
        id: "1",
        title: "Research Experiments",
        description: "Ideation and work performed in Research & Development.We create a strategy or help guide you to a strategy in the implementation of this.",
    },
    {
        id: "2",
        title: "Translational Studies",
        description: "Etra's experience with translating clinical research to treatments for patients helps our clients identify significant gaps in their process at a much early stage than traditional clinical trial methodologies.",
    },
    {
        id: "3",
        title: "Pre-Clinical Studies",
        description: "Etra collaborates with researchers and experts in the field to create highly specialized and concise study plans. Etra utilizes rigorous experimental methods to ensure accuracy and reliably of your data for future regulatory submissions.",
    },
    {
        id: "4",
        title: "Clinical Studies",
        description: "Product is sold and available as a commerical therapy.",
    },
    {
        id: "5",
        title: "Commercialization",
        description: "Assisting in the new drug application (NDA) submission.",
    },
]

const TimelineTwo = ({classVar}) => {
    return (
        <div className="timeline-style-two bg-color-blackest">
            <div className="row row--0">
                {/* Start Single Progress */}
                {TimelineData.map((data , index) =>(
                    <div className={`col-lg-3 col-md-3 rn-timeline-single ${classVar}`} key={index}>
                        <div className="rn-timeline">
                            <ScrollAnimation 
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            animateOnce={true}>
                                <h6 className="title">{data.title}</h6>
                            </ScrollAnimation>
                            <div className="progress-line">
                                <div className="line-inner"></div>
                            </div>
                            <div className="progress-dot">
                                <div className="dot-level">
                                    <div className="dot-inner"></div>
                                </div>
                            </div>
                            <ScrollAnimation 
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            animateOnce={true}>
                                <p className="description">{data.description}</p>
                            </ScrollAnimation>
                        </div>
                    </div>
                ))}
                {/* End Single Progress */}
            </div>
        </div>
    )
}
export default TimelineTwo;