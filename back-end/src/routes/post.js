const express = require('express');
const Post = require("../controllers/post");
const router = express.Router();

/* GET categories page. */
router.get("/posts", Post.getPosts);



module.exports = router;
