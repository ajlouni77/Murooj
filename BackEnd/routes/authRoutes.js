// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");
// const Profile = require("../models/Profile");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");















const express = require("express");
const router = express.Router();
const { registerUser, loginUser,logoutUser } = require("../controllers/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

module.exports = router;

