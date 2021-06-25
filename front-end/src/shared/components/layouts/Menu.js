import React from 'react'
import {Link} from 'react-router-dom'
const Menu = () => {
    return (
        <>
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
                            <Link
                                to="/login"
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
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Menu
