import React from 'react'

const Footer = () => {
    return (
        <footer>
    <div className="site-section bg-f8f9fa">
        <div className="container">
            <form action="#" className="row align-items-center">
                <div className="col-md-5 mr-auto">
                    <h2>Newsletter Subcribe</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Perferendis aspernatur ut at quae omnis pariatur
                        obcaecati possimus nisi ea iste!
                    </p>
                </div>
                <div className="col-md-6 ml-auto">
                    <div className="d-flex">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                        />
                        <button type="submit" className="btn btn-secondary">
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
                            Copyright © All rights reserved | This template is
                            made with{" "}
                            <i
                                className="fas fa-heart text-danger"
                                aria-hidden="true"
                            />{" "}
                            by{" "}
                            <a href="https://colorlib.com" target="_blank">
                                Colorlib
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>

    )
}

export default Footer
