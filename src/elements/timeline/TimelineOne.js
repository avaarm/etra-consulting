import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";

const TimelineData = [
    {
        id: "1",
        date: "Step-1",
        title: "Pre-Clinical Study",
        description: "Product safety, comparability to preclinical material, feasibility of process",
        image: "timeline-01",
        workingStep: [
            {
                stepTitle: "Where we come in",
                stepDescription: "We create a strategy or help guide you to a strategy in the implementation of this",
            },
        ]
    },
    {
        id: "2",
        date: "Step-2",
        title: "Translational Experiments",
        description: "Increasing expectation for product characterization and compliance with cGMP.",
        image: "timeline-02",
        workingStep: [
            {
                stepTitle: "Where we come in",
                stepDescription: "Assisting and overseeing translational experiments",
            },
        ]
    },
    {
        id: "3",
        date: "Step-3",
        title: "Registration Studies",
        description: "Scale up/out to support clinical studies.",
        image: "timeline-03",
        workingStep: [
            {
                stepTitle: "Where we come in",
                stepDescription: "Advising on scale up process",
            },
        ]
    },
    {
        id: "4",
        date: "Step-4",
        title: "Post Approval Work- Phase I and Phase II work",
        description: "Phase I studies are done to find the highest dose of the new treatment that can be given safely without causing severe side effects.If a new treatment is found to be safe in phase I clinical trials, a phase II clinical trial is done to see if it works in certain types of cancer. ",
        image: "timeline-04",
        workingStep: [
            {
                stepTitle: "Where we come in",
                stepDescription: "Data analysis, report creation, and continued scientific and clinical support",
            },
        ]
    },
    {
        id: "5",
        date: "Step-5",
        title: "Commercialization",
        description: "Full FDA compliance required. When phase III clinical trials (or sometimes phase II trials) show a new drug is more effective or safer than the current treatment, a new drug application (NDA) is submitted to the Food and Drug Administration (FDA) for approval.",
        image: "timeline-05",
        workingStep: [
            {
                stepTitle: "Where we come in",
                stepDescription: "Assisting in the new drug application (NDA) submition",
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
                                                <a className="btn-default btn-large round" href="https://outlook.office365.com/owa/calendar/EtraCalendat@etrabio.com/bookings/"><span>Get Started Now</span></a>
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
