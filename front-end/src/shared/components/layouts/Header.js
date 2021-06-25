import React from "react";
import { Link } from "react-router-dom"
const Header = () => {
    return (
        <header>
            <div className="container pt-4 pb-4">
                <header className="topbar" data-navbarbg="skin1">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6 d-flex">
                            <Link to="/" className="site-logo">
                                FUNNY CODE
                            </Link>
                            <a
                                href="#"
                                className="ml-auto d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"
                            >
                                <span className="icon-menu h3" />
                            </a>
                        </div>
                        <div className="col-12 col-lg-6 ml-auto d-flex">
                            <div className="ml-md-auto top-social d-none d-lg-inline-block">
                                <a href="#" className="d-inline-block p-3">
                                    <i className="ti-facebook" />
                                </a>
                                <a href="#" className="d-inline-block p-3">
                                    <i className="ti-twitter" />
                                </a>
                                <a href="#" className="d-inline-block p-3">
                                    <i className="ti-instagram" />
                                </a>
                                <a href="#" className="d-inline-block p-3">
                                    <i className="ti-google" />
                                </a>
                                <form className="app-search">
                                    <input
                                        type="text"
                                        className="form-control rounded-pill"
                                        placeholder="Search..."
                                    />
                                    <a className="srh-btn">
                                        <i className="ti-search" />
                                    </a>
                                </form>
                            </div>
                        </div>
                        <div className="col-6 d-block d-lg-none text-right"></div>
                    </div>
                </header>
            </div>
        </header>
    );
};

export default Header;
