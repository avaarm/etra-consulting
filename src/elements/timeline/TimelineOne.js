import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";

const TimelineData = [
    {
        id: "1",
        date: "Step-1",
        title: "Research & Translational Studies",
        description: "Product safety, comparability to preclinical material, feasibility of process. Increasing expectation for product characterization and compliance with cGMP.",
        image: "timeline-01",
        workingStep: [
            {
                stepTitle: "Etra's Expertise",
                stepDescription: "The Etra team has a tested and optimized technology transfer platfom. Additionally, the teams experience with translating clinical research to treatments for patients helps our clients identify significant gaps in their process at a much early stage than traditional clinical trial methodologies",
            },
        ]
    },
    {
        id: "2",
        date: "Step-2",
        title: "Pre-Clinical Studies",
        description: "Scale up/out to support clinical studies.",
        image: "timeline-02",
        workingStep: [
            {
                stepTitle: "Etra's Expertise",
                stepDescription: "Etra collaborates with researchers and experts in the field to create highly specialized and concise study plans. Etra utilizes rigorous experimental methods to ensure accuracy and reliably of your data for future regulatory submissions.",
            },
        ]
    },
    {
        id: "3",
        date: "Step-3",
        title: "Clinical Studies",
        description: "Phase I studies are done to find the highest dose of the new treatment that can be given safely without causing severe side effects.If a new treatment is found to be safe in phase I clinical trials, a phase II clinical trial is done to see if it works in certain types of cancer. ",
        image: "timeline-03",
        workingStep: [
            {
                stepTitle: "Etra's Expertise",
                stepDescription: "Etra has significant experience developing and validating manufacturing protocols which are successfully used by multiple manufacturing sites across the country. Etra collaborates with regulatory agencies to ensure the clinical process meets the latest manufacturing standard.",
            },
        ]
    },
    {
        id: "4",
        date: "Step-4",
        title: "Commercialization",
        description: "Full FDA compliance required. When phase III clinical trials (or sometimes phase II trials) show a new drug is more effective or safer than the current treatment, a new drug application (NDA) is submitted to the Food and Drug Administration (FDA) for approval.",
        image: "timeline-04",
        workingStep: [
            {
                stepTitle: "Etra's Expertise",
                stepDescription: "Assisting in the new drug application (NDA) submission",
            },
        ]
    },

]

const TimelineOne = () => {
    return (
        <div className="rn-timeline-wrapper timeline-style-one position-relative">
            <div className="timeline-line"></div>
            {/* Start Single Timeline  */}

            {TimelineData.map((data, index) =>(
                <div className="single-timeline mt--50" key={index}>
                    <div className="timeline-dot">
                        <div className="time-line-circle"></div>
                    </div>
                    <div className="single-content">
                        <div className="inner">
                            <div className="row row--30 align-items-center">
                                <div className="order-2 order-lg-1 col-lg-6 mt_md--40 mt_sm--40">
                                    <div className="content">
                                        <ScrollAnimation 
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}>
                                            <span className="date-of-timeline">{data.date}</span>
                                        </ScrollAnimation>

                                        <ScrollAnimation 
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}>
                                            <h2 className="title">{data.title}</h2>
                                        </ScrollAnimation>

                                        <ScrollAnimation 
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}>
                                            <p className="description">{data.description}</p>
                                        </ScrollAnimation>

                                        <div className="row row--30">
                                            {data.workingStep.map((data, index)=>(
                                                <div className="col-lg-6 col-md-6 col-12" key={index}>
                                                    <div className="working-list">
                                                        <ScrollAnimation 
                                                        animateIn="fadeInUp"
                                                        animateOut="fadeInOut"
                                                        animateOnce={true}>
                                                            <h5 className="working-title">{data.stepTitle}</h5>
                                                        </ScrollAnimation>

                                                        <ScrollAnimation 
                                                        animateIn="fadeInUp"
                                                        animateOut="fadeInOut"
                                                        animateOnce={true}>
                                                            <p>{data.stepDescription}</p>
                                                        </ScrollAnimation>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="read-morebtn">
                                            <ScrollAnimation 
                                            animateIn="fadeInUp"
                                            animateOut="fadeInOut"
                                            animateOnce={true}>
                                                <a className="btn-default btn-large round" href="https://outlook-sdf.office.com/bookwithme/user/580d376771cb4ad1b5a0d7fa15c3a5be%40etrathera.com/meetingtype/dcfd633a-584b-4695-89f3-52cc96a6f0b7?anonymous/" target="_blank"><span>Get Started Now</span></a>
                                            </ScrollAnimation>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-1 order-lg-2 col-lg-6">
                                    <div className="thumbnail">
                                        <img className="w-100" src={`./images/timeline/${data.image}.jpg`} alt="Corporate React Template" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
           
            {/* End Single Timeline  */}
        </div>
    )
}

export default TimelineOne;
