import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <>
            <div
                id="login-modal"
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
                            <form action="#" className="pl-3 pr-3">
                                <div className="form-group">
                                    <label htmlFor="emailaddress1">
                                        Email address
                                    </label>
                                    <input
                                        className="form-control"
                                        type="email"
                                        id="emailaddress1"
                                        required
                                        placeholder="john@deo.com"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password1">Password</label>
                                    <input
                                        className="form-control"
                                        type="password"
                                        required
                                        id="password1"
                                        placeholder="Enter your password"
                                    />
                                </div>
                                <div className="form-group d-flex justify-content-between">
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="customCheck2"
                                        />
                                        <label
                                            className="custom-control-label"
                                            htmlFor="customCheck2"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                    <span
                                        type="button"
                                        data-target="#recoverform"
                                        data-toggle="modal"
                                        data-dismiss="modal"
                                    >
                                        Forget password?
                                    </span>
                                </div>
                                <div className="form-group text-center">
                                    <button
                                        className="btn btn-block btn-secondary"
                                        type="submit"
                                    >
                                        Sign In
                                    </button>
                                </div>
                                <div className="mt-5 text-center">
                                    <Link to="/register">
                                        <span
                                            type="button"
                                            data-target="#signup-modal"
                                            data-toggle="modal"
                                            data-dismiss="modal"
                                        >
                                            Create your account
                                            <i className="ti-pencil-alt" />
                                        </span>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
