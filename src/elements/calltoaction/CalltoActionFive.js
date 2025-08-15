import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import { FiArrowRight } from "react-icons/fi";

const callToActionData = {
    title: "Stay With Us.",
    subtitle: "We'll send you the latest news on GMP and FDA regulation.",
    btnText: "Submit",
}

const CalltoActionFive = () => {
    return (
        <div className="rn-callto-action clltoaction-style-default style-5">
            <div className="container">
                <div className="row row--0 align-items-center content-wrapper theme-shape">
                    <div className="col-lg-12">
                        <div className="inner">
                            <div className="content text-center">
                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <h2 className="title">{callToActionData.title}</h2>
                                </ScrollAnimation>
                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <h6 className="subtitle">{callToActionData.subtitle}</h6>
                                </ScrollAnimation>

                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <div className="newsletter-form text-center">
                                        <form action="#">
                                            <div className="form-group">
                                                <input type="email" name="email" placeholder="Enter your email" required />
                                                <button type="submit" className="btn-default btn-icon">{callToActionData.btnText} <i className="icon"><FiArrowRight /></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default CalltoActionFive;