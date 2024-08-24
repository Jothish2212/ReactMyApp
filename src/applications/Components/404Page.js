
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Error404Classic = () => {
    return (
        <Fragment>
            <h1 className="nk-error-head">404</h1>
            <h3 className="nk-error-title">Oops! Why you’re here?</h3>
            <p className="nk-error-text">
                We are very sorry for inconvenience. It looks like you’re try to access a page that either has been deleted
                or never existed.
            </p>
            <Link to={`${process.env.PUBLIC_URL}/`}>
                Back To Login
            </Link>
        </Fragment>
    );
};
export default Error404Classic;
