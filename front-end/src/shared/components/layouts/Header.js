import React from "react";

const Header = () => {
    return (
        <header>
            <div className="container pt-4 pb-4">
                <header className="topbar" data-navbarbg="skin1">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6 d-flex">
                            <a href="index.html" className="site-logo">
                                FUNNY CODE
                            </a>
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
            <nav>
                <div className="container">
                    <ul className="nav align-items-center d-flex justify-content-center">
                        <li className="nav-item">
                            {" "}
                            <a
                                href="javascript:void(0)"
                                className="nav-link note-link d-flex align-items-center active px-2 px-md-3 mr-0 mr-md-2"
                                id="all-category"
                            >
                                <span className="d-none d-md-block">HOME</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            {" "}
                            <a
                                href="javascript:void(0)"
                                className="nav-link note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2"
                                id="note-business"
                            >
                                <span className="d-none d-md-block">CODE</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            {" "}
                            <a
                                href="javascript:void(0)"
                                className="nav-link note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2"
                                id="note-social"
                            >
                                <span className="d-none d-md-block">LIFE</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            {" "}
                            <a
                                href="javascript:void(0)"
                                className="nav-link note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2"
                                id="note-important"
                            >
                                <span className="d-none d-md-block">ABOUT</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            {" "}
                            <a
                                href="javascript:void(0)"
                                className="nav-link note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2"
                                id="add-notes"
                            >
                                <span className="d-none d-md-block">
                                    CONTACT
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            {" "}
                            <a
                                href="javascript:void(0)"
                                className="nav-link note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2"
                                id="add-notes"
                            >
                                <span
                                    className="d-none d-md-block"
                                    data-toggle="modal"
                                    data-target="#login-modal"
                                >
                                    LOGIN
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
