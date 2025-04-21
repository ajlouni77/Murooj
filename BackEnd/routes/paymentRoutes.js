const express = require("express");
const router = express.Router();
const { submitPayment } = require("../controllers/paymentController");

router.post("/", submitPayment);

module.exports = router;
