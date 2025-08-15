import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../common/SEO';
import HeaderOne from '../../common/header/HeaderOne';
import FooterOne from '../../common/footer/FooterOne';

const CMC = () => {
    return (
        <>
            <SEO title="CMC" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small" HeaderSTyle="header-transparent" />
                <div className="service-details-page">
                    <div className="service-details-content">
                        <h1 className="headline">Building a Robust and Scalable Manufacturing Strategy for Your Cell and Gene Therapy</h1>
                        <div className="intro-text">
                            <p>The path from the lab to the clinic, and ultimately to the market, is paved with complex manufacturing challenges unique to cell and gene therapies. A robust CMC strategy is not just a regulatory necessity; it is the bedrock of your commercial success. At Etra, we partner with you to navigate the intricacies of process development, analytics, and manufacturing to build a foundation that is both scientifically sound and commercially viable.</p>
                            <p>Our collaborative approach ensures that your CMC strategy is seamlessly integrated with your clinical and regulatory goals from the very beginning. We focus on de-risking development and creating a scalable, cost-effective manufacturing process that meets global quality standards.</p>
                        </div>
                        <div className="services-list-section">
                            <h3 className="list-headline">Our CMC services include:</h3>
                            <ul className="services-list">
                                <li>Process Development & Optimization: Guidance on developing and optimizing your manufacturing process (e.g., vector production, cell engineering, fill/finish) for consistency, yield, and purity.</li>
                                <li>Analytical Strategy & Validation: Development of phase-appropriate analytical methods for product characterization, potency, and release, including assay qualification and validation.</li>
                                <li>Comparability Strategy: Designing and executing studies to demonstrate comparability after manufacturing process changes, a critical step for regulatory acceptance.</li>
                                <li>CDMO Selection & Management: Assisting in the identification, evaluation, and management of Contract Development and Manufacturing Organizations (CDMOs) to ensure a successful partnership.</li>
                                <li>Supply Chain & Logistics: Designing and implementing robust "needle-to-needle" supply chain solutions for autologous and allogeneic therapies, covering everything from apheresis to patient infusion.</li>
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

export default CMC;

