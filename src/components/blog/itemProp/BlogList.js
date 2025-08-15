import React from 'react';
import {slugify} from "../../../utils";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const BlogList = ({ data, StyleVar }) => {
    // Check if the link is external (from the news API)
    const isExternal = data.url;

    const cate = data.categories.map((value, i) => {
        return (
            <Link to={process.env.PUBLIC_URL + `/category/${slugify(value)}`} key={i}>{value}{i !== data.categories.length - 1 && ","}</Link>
        )
    });

    const renderLink = (children) => {
        if (isExternal) {
            return <a href={data.url} target="_blank" rel="noopener noreferrer">{children}</a>;
        }
        return <Link to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}>{children}</Link>;
    };

    return (
        <div className={`rn-card ${StyleVar}`}>
            <div className="inner">
                <div className="thumbnail">
                    {renderLink(<img src={data.image || `${process.env.PUBLIC_URL}/images/blog/blog-01.jpg`} alt="Blog Image" />)}
                </div>
                <div className="content">
                    <ul className="rn-meta-list">
                        <li>{data.author}</li>
                        <li className="separator">/</li>
                        <li>{data.date}</li>
                    </ul>
                    <h4 className="title">
                        {renderLink(data.title)}
                    </h4>
                </div>
            </div>
        </div>
    )
}
BlogList.propTypes = {
    data: PropTypes.object
};
export default BlogList;
