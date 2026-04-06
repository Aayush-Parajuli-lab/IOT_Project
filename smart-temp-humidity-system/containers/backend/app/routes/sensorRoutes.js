const express = require("express");
const router = express.Router();

const { getLatestData, insertData } = require("../controllers/sensorController");

router.get("/", getLatestData);
router.post("/", insertData);

module.exports = router;