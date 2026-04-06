const db = require("../services/db");

exports.getLatestData = async (req, res) => {
    try {
        const [rows] = await db.query(
            "SELECT * FROM sensor_data ORDER BY created_at DESC LIMIT 1"
        );
        res.json(rows[0] || {});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.insertData = async (req, res) => {
    try {
        const { temperature, humidity } = req.body;

        await db.query(
            "INSERT INTO sensor_data (temperature, humidity) VALUES (?, ?)",
            [temperature, humidity]
        );

        res.json({ message: "Data inserted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};