import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});

  const fetchData = async () => {
    try {
      const res = await axios.get(process.env.REACT_APP_API_URL);
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🌡️ Smart Temp & Humidity Dashboard</h1>

      <h2>Temperature: {data.temperature || "--"} °C</h2>
      <h2>Humidity: {data.humidity || "--"} %</h2>
    </div>
  );
}

export default App;