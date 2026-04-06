const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sensorRoutes = require("./routes/sensorRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/sensor", sensorRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});