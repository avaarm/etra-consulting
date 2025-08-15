import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../common/SEO';
import HeaderOne from '../../common/header/HeaderOne';
import FooterOne from '../../common/footer/FooterOne';

const QualityCompliance = () => {
    return (
        <>
            <SEO title="Quality & Compliance" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small" HeaderSTyle="header-transparent" />
                <div className="service-details-page">
                    <div className="service-details-content">
                        <h1 className="headline">Embedding a Culture of Quality and Ensuring GxP Compliance</h1>
                        <div className="intro-text">
                            <p>In the world of cell and gene therapy, quality is not a department; it's the foundation of your entire enterprise. A robust and phase-appropriate Quality Management System (QMS) is essential for ensuring patient safety, data integrity, and regulatory compliance. At Etra, we work collaboratively with you to build a culture of quality from the inside out.</p>
                            <p>Our approach is practical and scalable. We help you implement systems that meet today's GxP requirements while being flexible enough to grow with your company. From preclinical development through commercialization, we are your partners in achieving and maintaining a constant state of inspection readiness.</p>
                        </div>
                        <div className="services-list-section">
                            <h3 className="list-headline">Our Quality & Compliance services include:</h3>
                            <ul className="services-list">
                                <li>QMS Development & Implementation: Designing and implementing phase-appropriate Quality Management Systems (QMS) covering all GxP areas (GCP, GLP, GMP).</li>
                                <li>Audit & Inspection Readiness: Conducting mock audits, gap analyses, and providing hands-on support to prepare your team and facilities for regulatory inspections.</li>
                                <li>Vendor Qualification & Oversight: Establishing programs for qualifying and overseeing your critical vendors, including CDMOs and CROs, to ensure they meet your quality standards.</li>
                                <li>Batch Record Review & Disposition: Providing expert review of manufacturing batch records and supporting the disposition of clinical and commercial products.</li>
                                <li>Training & Mentorship: Developing and delivering customized GxP training programs to build quality-focused competencies within your team.</li>
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

export default QualityCompliance;

