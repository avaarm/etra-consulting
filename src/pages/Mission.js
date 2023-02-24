import React from 'react'
import SEO from "../common/SEO";
// import HeaderTopNews from '../common/header/HeaderTopNews';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import Mission from "../elements/about/Mission";
// import BrandThree from '../elements/brand/BrandThree';
// import AboutFour from '../elements/about/AboutFour';
import ServiceOne from "../elements/service/ServiceOne";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
// import CounterUpFour from "../elements/counterup/CounterUpFour";
// import TeamFour from "../elements/team/TeamFour";
import TimelineTwo from "../elements/timeline/TimelineTwo";
import Separator from "../elements/separator/Separator";

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