import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../common/SEO';
import HeaderOne from '../../common/header/HeaderOne';
import FooterOne from '../../common/footer/FooterOne';

const Regulatory = () => {
    return (
        <>
            <SEO title="Regulatory" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small" HeaderSTyle="header-transparent" />
                <div className="service-details-page">
                    <div className="service-details-content">
                        <h1 className="headline">Navigating the Global Regulatory Landscape with Confidence and Foresight</h1>
                        <div className="intro-text">
                            <p>The regulatory environment for cell and gene therapies is dynamic and demanding. A forward-thinking regulatory strategy is essential to accelerate your timeline and maximize your probability of success. The Etra team, combining our deep industry experience, provides unparalleled expertise in crafting and executing global regulatory strategies that anticipate challenges and satisfy agency expectations.</p>
                            <p>We don't just help you prepare submissions; we partner with you to build a compelling narrative for regulators, grounded in strong science and a clear development plan. Our goal is to streamline your path to approval while building a strong, positive relationship with regulatory authorities worldwide.</p>
                        </div>
                        <div className="services-list-section">
                            <h3 className="list-headline">Our Regulatory services include:</h3>
                            <ul className="services-list">
                                <li>Global Regulatory Strategy: Developing comprehensive regulatory roadmaps for key markets (FDA, EMA, and beyond), including guidance on special designations like RMAT, PRIME, and Orphan Drug.</li>
                                <li>Regulatory Submissions: Leading the preparation, writing, and submission of high-quality regulatory documents, including INDs, CTAs, BLAs, and MAAs.</li>
                                <li>Health Authority Interactions: Preparing teams for and leading interactions with regulatory agencies, including pre-IND meetings, End-of-Phase meetings, and advisory committee meetings.</li>
                                <li>Regulatory Intelligence: Providing up-to-date intelligence on evolving guidelines and competitor precedents to keep your program on the leading edge.</li>
                                <li>Post-Approval Support: Assisting with post-marketing commitments, supplemental filings, and lifecycle management.</li>
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

export default Regulatory;

