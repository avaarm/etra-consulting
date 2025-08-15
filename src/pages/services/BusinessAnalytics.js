import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../common/SEO';
import HeaderOne from '../../common/header/HeaderOne';
import FooterOne from '../../common/footer/FooterOne';

const BusinessAnalytics = () => {
    return (
        <>
            <SEO title="Business Analytics" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small" HeaderSTyle="header-transparent" />
                <div className="service-details-page">
                    <div className="service-details-content">
                        <h1 className="headline">Driving Strategic Decisions with Actionable Market and Competitive Intelligence</h1>
                        <div className="intro-text">
                            <p>Success in the cell and gene therapy space requires more than just great science; it demands sharp business acumen. Etra's Business Analytics service provides the strategic intelligence you need to navigate the competitive landscape, secure investment, and optimize the commercial potential of your assets.</p>
                            <p>This is where my and Vignesh's roles as equity partners truly align with our clients' needs. We leverage sophisticated analytics to turn data into a strategic advantage, ensuring your scientific innovations are matched by a powerful business strategy. Our success is directly tied to yours, and our insights are designed to drive tangible growth.</p>
                        </div>
                        <div className="services-list-section">
                            <h3 className="list-headline">Our Business Analytics services include:</h3>
                            <ul className="services-list">
                                <li>Competitive Intelligence & Landscaping: In-depth analysis of the competitive environment to identify threats, opportunities, and key differentiators.</li>
                                <li>Market Analysis & Forecasting: Evaluating market size, patient populations, and treatment paradigms to build robust revenue forecasts and commercial models.</li>
                                <li>Asset Valuation & Diligence: Providing objective valuations and due diligence support for fundraising, licensing, and M&A activities.</li>
                                <li>Target Product Profile (TPP) Development: Defining and pressure-testing TPPs to ensure they are commercially competitive and aligned with market needs.</li>
                                <li>Commercial & Launch Strategy: Developing data-driven strategies for pricing, reimbursement, market access, and successful product launches.</li>
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

export default BusinessAnalytics;

