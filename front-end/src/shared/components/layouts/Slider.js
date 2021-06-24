import React from 'react'

const Slider = () => {
    return (
        <div>
            <div>
                <div className="container mt-4 mb-4">
                    <div
                        id="carouselExampleIndicators"
                        className="carousel slide"
                        data-ride="carousel"
                    >
                        <div className="carousel-inner" role="listbox">
                            <div
                                className="carousel-item active"
                                data-interval={5000}
                            >
                                <div className="row d-flex align-items-center">
                                    <div className="col-6 p-4">
                                        <img
                                            className="img-fluid"
                                            src="./assets/images/big/img4.jpg"
                                            alt="Second slide"
                                        />
                                    </div>
                                    <div className="col-6 p-5">
                                        <div className="content">
                                            <h4 className="category">
                                                What's new ?
                                            </h4>
                                            <h2 className="title">
                                                News Needs to Meet Its Audiences
                                                Where They Are
                                            </h2>
                                            <p className="mb-3">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit.
                                                Voluptate vero obcaecati natus
                                                adipisci necessitatibus eius,
                                                enim vel sit ad reiciendis. Enim
                                                praesentium magni delectus cum,
                                                tempore deserunt aliquid quaerat
                                                culpa nemo veritatis, iste
                                                adipisci excepturi consectetur
                                                doloribus aliquam accusantium
                                                beatae?
                                            </p>
                                            <div className="post-meta">
                                                <span className="d-block">
                                                    <a href="#">Dave Rogers</a>{" "}
                                                    in <a href="#">Food</a>
                                                </span>
                                                <span className="date-read">
                                                    Jun 14{" "}
                                                    <span className="mx-1">
                                                        •
                                                    </span>{" "}
                                                    3 min read{" "}
                                                    <span className="icon-star2" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-interval={5000}>
                                <div className="row d-flex align-items-center">
                                    <div className="col-6 p-4">
                                        <img
                                            className="img-fluid"
                                            src="./assets/images/big/img4.jpg"
                                            alt="Second slide"
                                        />
                                    </div>
                                    <div className="col-6 p-5">
                                        <div className="content">
                                            <h4 className="category">
                                                Editor's Pick
                                            </h4>
                                            <h2 className="title">
                                                News Needs to Meet Its Audiences
                                                Where They Are
                                            </h2>
                                            <p className="mb-3">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit.
                                                Voluptate vero obcaecati natus
                                                adipisci necessitatibus eius,
                                                enim vel sit ad reiciendis. Enim
                                                praesentium magni delectus cum,
                                                tempore deserunt aliquid quaerat
                                                culpa nemo veritatis, iste
                                                adipisci excepturi consectetur
                                                doloribus aliquam accusantium
                                                beatae?
                                            </p>
                                            <div className="post-meta">
                                                <span className="d-block">
                                                    <a href="#">Dave Rogers</a>{" "}
                                                    in <a href="#">Food</a>
                                                </span>
                                                <span className="date-read">
                                                    Jun 14{" "}
                                                    <span className="mx-1">
                                                        •
                                                    </span>{" "}
                                                    3 min read{" "}
                                                    <span className="icon-star2" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-interval={5000}>
                                <div className="row d-flex align-items-center">
                                    <div className="col-6 p-4">
                                        <img
                                            className="img-fluid"
                                            src="./assets/images/big/img4.jpg"
                                            alt="Second slide"
                                        />
                                    </div>
                                    <div className="col-6 p-5">
                                        <div className="content">
                                            <h4 className="category">
                                                Editor's Pick
                                            </h4>
                                            <h2 className="title">
                                                News Needs to Meet Its Audiences
                                                Where They Are
                                            </h2>
                                            <p className="mb-3">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit.
                                                Voluptate vero obcaecati natus
                                                adipisci necessitatibus eius,
                                                enim vel sit ad reiciendis. Enim
                                                praesentium magni delectus cum,
                                                tempore deserunt aliquid quaerat
                                                culpa nemo veritatis, iste
                                                adipisci excepturi consectetur
                                                doloribus aliquam accusantium
                                                beatae?
                                            </p>
                                            <div className="post-meta">
                                                <span className="d-block">
                                                    <a href="#">Dave Rogers</a>{" "}
                                                    in <a href="#">Food</a>
                                                </span>
                                                <span className="date-read">
                                                    Jun 14{" "}
                                                    <span className="mx-1">
                                                        •
                                                    </span>{" "}
                                                    3 min read{" "}
                                                    <span className="icon-star2" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider
