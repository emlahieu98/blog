const express = require('express');
const Auth = require("../controllers/auth");
const router = express.Router();

/* GET Auth page. */
router.post("/login", Auth.login);

router.post("/register", Auth.register);

router.get("/logout", Auth.logout);


module.exports = router;
