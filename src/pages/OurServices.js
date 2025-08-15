import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import { FaFlask, FaBalanceScale, FaVial, FaStethoscope, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const services = [
    { name: 'CMC', icon: <FaFlask />, link: '/services/cmc' },
    { name: 'Regulatory', icon: <FaBalanceScale />, link: '/services/regulatory' },
    { name: 'Nonclinical', icon: <FaVial />, link: '/services/nonclinical' },
    { name: 'Clinical', icon: <FaStethoscope />, link: '/services/clinical' },
    { name: 'Quality & Compliance', icon: <FaShieldAlt />, link: '/services/quality-compliance' },
    { name: 'Business Analytics', icon: <FaChartLine />, link: '/services/business-analytics' }
];

const OurServices = () => {
    return (
        <>
            <SEO title="Our Services" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small" HeaderSTyle="header-transparent" />
                <div className="services-landing-area">
                    <div className="container">
                        <h1 className="title">Our Integrated Service Domains</h1>
                        <div className="services-grid">
                            {services.map((service, index) => (
                                <Link to={service.link} className="service-card" key={index}>
                                    <div className="icon">{service.icon}</div>
                                    <h3 className="card-title">{service.name}</h3>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <FooterOne />
            </main>
        </>
    );
}

export default OurServices;
