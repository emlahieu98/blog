import React from "react";
import PostList from "../Post/PostList";
import PostNew from "../Post/PostNew";
import PostTag from "../Post/PostTag";
const index = () => {
    return (
        <>
            <PostList />
            <PostTag />
            <PostNew />
        </>
    );
};

export default index;
