import React, { useState, useEffect } from 'react';
import { FiArrowRight } from "react-icons/fi";
import HeaderOne from '../common/header/HeaderOne';
// import HeaderTopNews from '../common/header/HeaderTopNews';
import FooterOne from '../common/footer/FooterOne';
// import Copyright from '../common/footer/Copyright';
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import Separator from "../elements/separator/Separator";
import CalltoActionFive from "../elements/calltoaction/CalltoActionFive";
import BlogList from "../components/blog/itemProp/BlogList";
import ServiceCard from '../elements/service/ServiceCard';

const services = [
    { 
        name: 'CMC',
        description: 'Streamlining the path from laboratory to market with expert guidance on manufacturing, controls, and product characterization.',
        link: '/services/cmc' 
    },
    { 
        name: 'Regulatory',
        description: 'Navigating global regulatory landscapes to ensure compliance and accelerate approvals for your innovative therapies.',
        link: '/services/regulatory' 
    },
    { 
        name: 'Nonclinical',
        description: 'Designing and executing robust nonclinical programs to establish safety and efficacy for a seamless transition to clinical trials.',
        link: '/services/nonclinical' 
    },
    { 
        name: 'Clinical',
        description: 'Providing end-to-end clinical trial support, from strategic planning to operational execution, to bring new treatments to patients.',
        link: '/services/clinical' 
    },
    { 
        name: 'Quality & Compliance',
        description: 'Implementing scalable quality systems and ensuring GxP compliance to safeguard product integrity and patient safety.',
        link: '/services/quality-compliance' 
    },
    { 
        name: 'Business Analytics',
        description: 'Leveraging data-driven insights to inform strategic decisions, optimize operations, and maximize commercial success.',
        link: '/services/business-analytics' 
    }
];

const HomeDefault = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            // IMPORTANT: Replace 'YOUR_API_KEY' with your actual NewsAPI key.
            // You can get a free key from https://newsapi.org/
            const apiKey = 'a1ac5e2764e6435f9cb4cc3686fe8bab'; 
            const url = `https://newsapi.org/v2/everything?q=(cell%20therapy%20OR%20gene%20therapy)&sortBy=publishedAt&language=en&pageSize=3&apiKey=${apiKey}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                if (data.articles) {
                    const formattedArticles = data.articles.map(article => ({
                        id: article.url, // Using URL as a unique ID
                        title: article.title,
                        image: article.urlToImage,
                        author: article.source.name,
                        date: new Date(article.publishedAt).toLocaleDateString(),
                        url: article.url, // External link
                        categories: [] // No categories from API
                    }));
                    setArticles(formattedArticles);
                }
            } catch (error) {
                console.error("Error fetching news:", error);
            }
        };

        fetchNews();
    }, []);
    

    return (
        <>
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-transparent" />
                <div className="slider-area slider-style-1 height-850 variation-default" style={{ background: 'linear-gradient(to right, #24243e, #302b63, #0f0c29)', color: 'white' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-center">
                                    <h1 className="title theme-gradient display-3">Accelerate Your Path to Clinic. <br /> De-Risk Your Regulatory Submissions with <span className="glow">etra intelligence</span>.</h1>
                                    <h2 className="subtitle" style={{textTransform: 'none', marginTop: '30px'}}>etra Intelligence: The first AI-powered platform designed by cell and gene therapy experts <br /> to streamline IND and BLA submissions.</h2>
                                    <div className="button-group mt--40">
                                        <a className="btn-default btn-icon" href="#demo" target="_blank" rel="noopener noreferrer">Request a Personalized Demo <i className="icon"><FiArrowRight /></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Start Service Area  */}
                <div className="rwt-service-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "What We Do"
                                    title = "Our Integrated Service Domains"
                                    description = "We provide end-to-end strategic and operational support to move your cell and gene therapies from concept to reality."
                                />
                            </div>
                        </div>
                        <div className="row g-5">
                            {services.map((service, index) => (
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12" key={index}>
                                    <ServiceCard service={service} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Service Area  */}

                <Separator />
                <div className="blog-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Latest News"
                                    title = "Latest News in Clinical Trials"
                                />
                            </div>
                        </div>
                        <div className="row row--15">
                            {articles.length > 0 ? (
                                articles.map((item) => (
                                    <div key={item.id} className="col-lg-4 col-md-6 col-sm-12 col-12 mt--30">
                                        <BlogList StyleVar="box-card-style-default" data={item} />
                                    </div>
                                ))
                            ) : (
                                <p>Loading news...</p>
                            )}
                        </div>
                    </div>
                </div> 

                {/* Start Elements Area  */}
                <div className="rwt-callto-action-area rn-section-gapBottom">
                    <div className="wrapper">
                        <CalltoActionFive />
                    </div>
                </div>
                {/* End Elements Area  */}

                <FooterOne />
                {/* <Copyright />                     */}

            </main>
            
        </>
    )
}
export default HomeDefault

