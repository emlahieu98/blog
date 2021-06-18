const mongoose = require("mongoose");
const Category = require("../models/categoryModel")
const { transValidation } = require("../../langs/errors/vn");

exports.getCategories = async (req, res) => {
    try {
        const data = await Category.find()
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
