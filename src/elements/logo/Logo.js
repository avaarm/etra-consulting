import PropTypes from "prop-types";
import React from 'react';
import {Link} from "react-router-dom";
// import styles from './logo.module.css';


const Logo = ({image, image2}) => {
    return(
        <div className="logo">
            <Link to={process.env.PUBLIC_URL+"/etra"}>
                <img className="logo-dark" src={process.env.PUBLIC_URL + image} alt="Etra Logo" />
                <img className="logo-light" src={process.env.PUBLIC_URL + image2} alt="Etra Logo" />
            </Link>
        </div>
    )
}
Logo.propTypes = {
    image: PropTypes.string
};

export default Logo;
