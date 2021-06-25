import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
    return (
        <footer>
            <div className="site-section bg-f8f9fa">
                <div className="container">
                    <form action="#" className="row align-items-center">
                        <div className="col-md-5 mr-auto">
                            <h2>Newsletter Subcribe</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Perferendis aspernatur ut at
                                quae omnis pariatur obcaecati possimus nisi ea
                                iste!
                            </p>
                        </div>
                        <div className="col-md-6 ml-auto">
                            <div className="d-flex">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                />
                                <button
                                    type="submit"
                                    className="btn btn-secondary"
                                >
                                    <i className="fas fa-paper-plane" />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="copyright">
                                <p>
                                    Copyright © All rights reserved | This
                                    template is made with{" "}
                                    <i
                                        className="fas fa-heart text-danger"
                                        aria-hidden="true"
                                    />{" "}
                                    by{" "}
                                    <Link to="/" target="_blank">
                                        Funny Code
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer
