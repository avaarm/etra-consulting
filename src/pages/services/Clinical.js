import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../common/SEO';
import HeaderOne from '../../common/header/HeaderOne';
import FooterOne from '../../common/footer/FooterOne';

const Clinical = () => {
    return (
        <>
            <SEO title="Clinical" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small" HeaderSTyle="header-transparent" />
                <div className="service-details-page">
                    <div className="service-details-content">
                        <h1 className="headline">Executing Patient-Centric Clinical Trials with Operational Excellence</h1>
                        <div className="intro-text">
                                                        <p>Clinical development is where the promise of your therapy meets the reality of patient care. The operational complexity of cell and gene therapy trials requires specialized expertise and meticulous planning.</p>
                            <p>Our focus is on ensuring patient safety, generating high-quality data, and maintaining momentum in your development program. We bridge the gap between cutting-edge science and clinical practice to deliver results for your company and the patients you aim to serve.</p>
                        </div>
                        <div className="services-list-section">
                            <h3 className="list-headline">Our Clinical services include:</h3>
                            <ul className="services-list">
                                <li>Clinical Development Strategy: Designing comprehensive and efficient clinical development plans, from first-in-human to pivotal registration trials.</li>
                                <li>Protocol Design & Optimization: Collaborating with your team to develop protocols that are scientifically robust, operationally feasible, and patient-friendly.</li>
                                <li>Clinical Operations & Logistics: Providing strategic oversight for the unique operational challenges of CGT trials, including patient scheduling, apheresis, cryopreservation, and vein-to-vein logistics.</li>
                                <li>Site & Investigator Engagement: Facilitating the selection and activation of qualified clinical sites and building strong relationships with principal investigators.</li>
                                <li>Medical Monitoring & Data Review: Offering expert medical oversight to ensure patient safety and data integrity throughout the trial.</li>
                            </ul>
                        </div>
                        <div className="cta-section">
                            <Link to="/contact" className="btn-default">Partner with Us</Link>
                        </div>
                    </div>
                </div>
                <FooterOne />
            </main>
        </>
    );
}

export default Clinical;

