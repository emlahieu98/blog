const mongoose = require("mongoose");
const Post = require("../models/postModel")
const { transValidation } = require("../../langs/errors/vn");

exports.getPosts = async (req, res) => {
    try {
        const data = await Post.find()
        return res.status(200).json({
            status: "success",
            message: transValidation.input_incorrect,
            data,
        });
    } catch (error) {
        return res.status(500).json({
            status: "fail",
            message: transValidation.input_incorrect,
        });
    }
};
