import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import ContactOne from "./ContactOne";
import FooterOne from '../../common/footer/FooterOne';

const Contact = () => {
    return (
        <>
            <SEO title="Contact" />
            <Layout>
                <BreadcrumbOne 
                    title="Go from Research to Reality with the help <br /> of our qualified Pre-Clinical and clinical team"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Contact"
                />
                <div className="main-content">
                    {/* Start Contact Area  */}
                    <div className="rwt-contact-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 mb--40">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Contact Etra Therapeutics"
                                        title = "We are excited to hear from you. Let’s see if your clinical needs and our capabilities are a good match."
                                        description = ""
                                    />
                                </div>
                            </div>
                            <ContactOne />
                        </div>
                    </div>
                    {/* End Contact Area  */}
                </div>
            </Layout>
            <FooterOne/>
        </>
    )
}
export default Contact;