import React from 'react';
import Typed from 'react-typed';
import {Link} from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import AccordionOne from '../accordion/AccordionOne';

const mission = () => {
    return (
        <div className="rn-company-mission-are rn-section-gap">
            <div className="container">
                <div className="row row--30">
                    <div className="col-lg-6">
                        <div className="mission-title">
                            <h2 className="title">Etra's Mission <br /> {" "}
                                <Typed className="theme-gradient"
                                    strings={[
                                        "Research to...",
                                        "Clinic to...",
                                        "Patients.",
                                    ]}
                                    typeSpeed={80}
                                    backSpeed={5}
                                    backDelay={1000}
                                    loop
                                />
                            </h2>
                            <p>Etra is a biotech startup that is dedicated to bridging the gap between early-stage research and development of cures and successful clinical treatments. We believe that the use of cutting-edge technology and innovative internal tools will enable us to fast-track the process of getting a product to the clinic and improve the lives of patients everywhere. </p>

                            <p>Etra was founded by passionate clinical trial experts who saw a need for a more streamlined approach to getting life-saving treatments to patients. Our team of experts has years of experience in the clinical trial industry and a deep understanding of the complex regulatory landscape. We use this expertise to help our clients navigate the development process, from early-stage research to FDA approval and beyond. </p>
                            <p>Our internal tools and cutting-edge technology allow us to streamline the development process and provide our clients with a more efficient and effective solution. We believe that by bringing together the best technology and expertise, we can help our clients bring their treatments to market more quickly, and ultimately make a real difference in the lives of patients. </p>
                            <p>At Etra, we are driven by our desire for helping to develop the next generation of life-saving treatments and our commitment to making a difference in the world. We are proud to be at the forefront of the biotech industry and are dedicated to delivering innovative solutions that improve the lives of patients everywhere. </p>
                            <div className="read-more-btn mt--50">
                                <a className="btn-default btn-icon" href="https://outlook.office365.com/owa/calendar/EtraCalendat@etrabio.com/bookings/" target="_blank" >Learn More <i className="icon"><FiArrowRight /></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt_md--30 mt_sm--30">
                        <AccordionOne customStyle="" />
                    </div>
                </div>
            </div>                        
        </div>
    )
}
export default mission;
