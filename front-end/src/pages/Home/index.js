import React from "react";
 import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./../../shared/components//layouts/Header";
import Menu from "./../../shared/components//layouts/Menu";
import Slider from "./../../shared/components//layouts/Slider";
import Footer from "./../../shared/components//layouts/Footer";
import PostList from "../Post/PostList";
import PostNew from "../Post/PostNew";
import PostTag from "../Post/PostTag";
const index = () => {
    return (
        <>
            {/* <Switch> */}
                <Header />
                <Menu />
                <Slider />
                <PostList />
                <PostTag />
                <PostNew />
                <Footer />
            {/* </Switch> */}
        </>
    );
};

export default index;
