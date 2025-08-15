import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../common/SEO';
import HeaderOne from '../../common/header/HeaderOne';
import FooterOne from '../../common/footer/FooterOne';

const Nonclinical = () => {
    return (
        <>
            <SEO title="Nonclinical" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small" HeaderSTyle="header-transparent" />
                <div className="service-details-page">
                    <div className="service-details-content">
                        <h1 className="headline">Designing Pivotal Nonclinical Programs to De-Risk Clinical Development</h1>
                        <div className="intro-text">
                            <p>A well-designed nonclinical program is fundamental to demonstrating safety and proof-of-concept for your cell or gene therapy. It forms the scientific basis for first-in-human studies and is subject to intense regulatory scrutiny. At Etra, we apply our deep biological and toxicological expertise to help you design and execute efficient, informative, and regulatory-compliant nonclinical programs.</p>
                            <p>Our collaborative approach ensures your nonclinical studies are directly relevant to your specific therapeutic modality and clinical indication. We focus on generating the critical data needed to justify your clinical starting dose, characterize potential risks, and build a strong case for moving into the clinic.</p>
                        </div>
                        <div className="services-list-section">
                            <h3 className="list-headline">Our Nonclinical services include:</h3>
                            <ul className="services-list">
                                <li>Nonclinical Development Planning: Crafting integrated nonclinical plans that efficiently address key questions of pharmacology, biodistribution, and toxicology.</li>
                                <li>Study Design & Oversight: Providing expert input on the design of pivotal studies and overseeing their execution at leading CROs to ensure quality and adherence to goals.</li>
                                <li>CRO Selection and Management: Leveraging our network and experience to help you select and manage the right Contract Research Organization (CRO) for your specific needs.</li>
                                <li>Toxicology & Safety Assessment: Specialized expertise in addressing the unique safety challenges of cell and gene therapies, including immunogenicity, genotoxicity, and off-target effects.</li>
                                <li>Data Interpretation & Reporting: Assisting in the interpretation of complex nonclinical data sets and authoring the nonclinical sections of regulatory submissions.</li>
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

export default Nonclinical;

