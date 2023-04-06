import React from "react";
import ReactApexChart from "react-apexcharts";

export default function PieChart() {
  var state = {
    series: [55, 31, 14],
    options: {
      chart: {
        height: 300,
        width: 300,
        position: "top",
        horizontalAlign: "left",
        floating: true,
        offsetY: 30,
        offsetX: -40,
        type: "pie",
      },
      colors: ["#98D89E", "#F6DC7D", "#EE8484" ],
      labels: ["Basic Tees", "Custom Short Plants", "Super hoodies"],
      legend: {
        fontSize: "16px",
        fontWeight: "bold",
        position: "right",
        horizontalAlign: "right",
        floating: true,
        offsetY: 100,
        offsetX: -180,
        markers: {
          width: 15,
          height: 15,
        },
      },
    },
  };
  return (
    <ReactApexChart
      type="pie"
      height="70%"
      width="70%"
      options={state.options}
      series={state.series}
    />
  );
}