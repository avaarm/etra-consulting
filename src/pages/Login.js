import React from 'react';
import SEO from '../common/SEO';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';

const Login = () => {
    return (
        <>
            <SEO title="Client Login" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small" HeaderSTyle="header-transparent" />
                <div className="login-area">
                    <div className="container">
                        <div className="login-form-container">
                            <h2 className="title">Client Portal Login</h2>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" name="password" required />
                                </div>
                                <button type="submit" className="btn-default">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
                <FooterOne />
            </main>
        </>
    );
}

export default Login;
