import React from "react";

const Register = () => {
    return (
        <>
            <div
                id="signup-modal"
                className="modal fade"
                tabIndex={-1}
                role="dialog"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="text-center mt-2 mb-4">
                                <a href="index.html" className="text-success">
                                    <span>
                                        <img
                                            className="mr-2"
                                            src="./assets/images/logo-icon.png"
                                            alt
                                            height={18}
                                        />
                                        <img
                                            src="./assets/images/logo-text.png"
                                            alt
                                            height={18}
                                        />
                                    </span>
                                </a>
                            </div>
                            <form className="pl-3 pr-3" action="#">
                                <div className="form-group">
                                    <label htmlFor="username">Name</label>
                                    <input
                                        className="form-control"
                                        type="email"
                                        id="username"
                                        required
                                        placeholder="Michael Zenaty"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="emailaddress">
                                        Email address
                                    </label>
                                    <input
                                        className="form-control"
                                        type="email"
                                        id="emailaddress"
                                        required
                                        placeholder="john@deo.com"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        className="form-control"
                                        type="password"
                                        required
                                        id="password"
                                        placeholder="Enter your password"
                                    />
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="customCheck1"
                                        />
                                        <label
                                            className="custom-control-label"
                                            htmlFor="customCheck1"
                                        >
                                            I accept{" "}
                                            <a href="#">Terms and Conditions</a>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group text-center">
                                    <button
                                        className="btn btn-block btn-secondary"
                                        type="submit"
                                    >
                                        Sign Up Free
                                    </button>
                                </div>
                                <div className="mt-5 text-center">
                                    <span
                                        type="button"
                                        data-target="#login-modal"
                                        data-toggle="modal"
                                        data-dismiss="modal"
                                    >
                                        Already have account
                                        <i className="ti-check" />
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
