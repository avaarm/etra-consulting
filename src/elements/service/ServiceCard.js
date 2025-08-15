import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const ServiceCard = ({ data }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const cardStyle = {
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        padding: '15px',
    };

    const innerStyle = {
        display: 'flex',
        gap: '30px',
        alignItems: 'flex-start',
    };

    const iconStyle = {
        fontSize: '30px',
        color: 'var(--color-primary)',
        marginTop: '5px',
        flexShrink: 0,
    };

    const titleStyle = {
        fontSize: '24px',
        fontWeight: 600,
        marginBottom: '10px',
        textTransform: 'lowercase',
    };

    const descriptionStyle = {
        fontSize: '16px',
        lineHeight: 1.5,
        color: 'var(--color-body)',
    };

    const linkStyle = {
        textDecoration: 'none',
        color: 'var(--color-heading)',
    };

    return (
        <Link to={process.env.PUBLIC_URL + `/service-details/${data.id}`} style={linkStyle}>
            <div style={cardStyle} ref={ref}>
                <div style={innerStyle}>
                    <div style={iconStyle}>
                        <data.icon />
                    </div>
                    <div className="content">
                        <h3 style={titleStyle}>{data.title}</h3>
                        <p style={descriptionStyle}>{data.description}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ServiceCard;
