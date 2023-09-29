import React, { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";
import { Box } from "@mui/material";
import { fetchTopFiveProducts } from "../../../api";

export default function BestSelledProductChart() {
  const [channelData, setChannelData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchTopFiveProducts();
        console.log(response.data);
        setChannelData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

    console.log(channelData);

  const options3 = {
    chart: {
      id: "basic-bar",
      type: "bar",
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "top",
      horizontalAlign: "center",
      offsetY: 0,
    },
    title: {
      text: "Top 5 Selled Product last Week",
    },
    plotOptions: {
      bar: {
        columnWidth: "15%",
        horizontal: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 1,
    },
    markers: {
      size: 4,
      strokeWidth: 0,
      hover: {
        size: 7,
      },
    },
    fill: {
      opacity: 1,
    },
    xaxis: {
      categories: ["Mon", "Thu", "Web", "Tue", "Fri", "Sat", "Sun"],
    },
    tooltip: {
      fixed: {
        enabled: true,
        position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60,
      },
    },
  };
  return (
    <div>
      <ApexCharts
        options={options3}
        series={channelData}
        type="line"
        width="90%"
        height={260}
        sx={{ padding: 0, margin: 0 }}
      />
    </div>

  
  );
}
