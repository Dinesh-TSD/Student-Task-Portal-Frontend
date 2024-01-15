import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import axios from "axios";

const LineChart = () => {
  const chartRef = useRef();

  const [barData, setBarData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8080/api/v1/tasks");
        setBarData(res.data.tasks);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: barData.map((item) => item.day),
        datasets: [
          {
            label: "Marks",
            data: barData.map((item) => item.mark),
            backgroundColor: [
              "rgb(255, 127, 80)",
              "rgb(255, 80, 80)",
              "rgb(255, 80, 162)",
              "rgb(194, 80, 255)",
              "rgb(255, 226, 80)"
            ],
            borderColor: "rgb(156, 148, 247)",
            borderWidth: 1,
            color: "rgb(0, 0, 0)"
          },
        ],
      },
   
    });

    return () => {
      // Cleanup on unmount
      myChart.destroy();
    };
  }, [barData]);

  return <canvas ref={chartRef} width="400" height="200"></canvas>;
};

export default LineChart;