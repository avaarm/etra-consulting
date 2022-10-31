import PropTypes from "prop-types";
import React from 'react';
import {Link} from "react-router-dom";
import styles from './logo.module.css';


const Logo = ({image, image2}) => {
    return(
        <div className="logo">
            <Link to={process.env.PUBLIC_URL + "/business-consulting"}>
                {/* <img className={styles.logoLight} src={process.env.PUBLIC_URL + image} alt="Corporate Logo" /> */}
                <img className={styles.logoDark} src={process.env.PUBLIC_URL + image2} alt="Corporate Logo" />
            </Link>
        </div>
    )
}
Logo.propTypes = {
    image: PropTypes.string
};

export default Logo;
