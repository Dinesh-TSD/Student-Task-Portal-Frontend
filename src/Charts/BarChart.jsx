import React, { useContext, useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import axios from "axios";
import { UserContext } from "../Context/userContext";

const BarChart = () => {
  const { user } = useContext(UserContext);
  const studentId = user.id;

  const chartRef = useRef();
  const [barData, setBarData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.post("http://127.0.0.1:8080/api/v1/charttasks",{
          userId: studentId,
        });
        console.log(res.data.tasks);
        setBarData(res.data.tasks);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [studentId]);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const myChart = new Chart(ctx, {
      type: "bar",
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
            borderColor: "rgb(255, 255, 255)",
            borderWidth: 1,
            barThickness:50
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

export default BarChart;
