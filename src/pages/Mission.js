import React from 'react'
import SEO from "../common/SEO";
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import Mission from "../elements/about/Mission";


const AboutUs = () => {
    return (
        <>
            <SEO title="About Etra" />
            <main className="page-wrapper">
                {/* <HeaderTopNews /> */}
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-transparent" />





                <Mission />                    
                {/* Start Mission Area  */}




                <FooterOne />
            </main>
        </>
    )
}

export default AboutUs;