import React from "react";

const ForgetPassword = () => {
    return (
        <>
            <div
                id="recoverform"
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
                            <div className="logo">
                                <h3 className="font-weight-medium mb-3">
                                    Recover Password
                                </h3>
                                <span>
                                    Enter your Email and instructions will be
                                    sent to you!
                                </span>
                            </div>
                            <div className="row mt-3">
                                {/* Form */}
                                <form
                                    className="col-12 form-material"
                                    action="index.html"
                                >
                                    {/* email */}
                                    <div className="form-group row">
                                        <div className="col-12">
                                            <input
                                                className="form-control"
                                                type="email"
                                                required
                                                placeholder="Your email"
                                            />
                                        </div>
                                    </div>
                                    {/* pwd */}
                                    <div className="row mt-3">
                                        <div className="col-12">
                                            <button
                                                className="btn btn-block btn-secondary"
                                                type="submit"
                                                name="action"
                                            >
                                                Reset
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgetPassword;
