const express = require('express');
const Category = require("../controllers/category");
const router = express.Router();

/* GET categories page. */
router.get("/categories", Category.getCategories);



module.exports = router;
