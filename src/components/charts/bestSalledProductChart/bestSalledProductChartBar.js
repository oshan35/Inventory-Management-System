import React, { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";
import { fetchChannelData } from "../../../api";
import { Box } from "@mui/material";

export default function BestSelledProductChartBar() {
  const [channelData, setChannelData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchChannelData();
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
    colors: ["#5A4FCF", "#FFA500", "#C53500", "#FFBF00", "#FF3659"],
    chart: {
      id: "basic-bar",
      type: "bar",
      stacked: true, // one on top of another
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
      text: "Top 5 Selled Product Over Year",
    },
    plotOptions: {
      bar: {
        distributed: true,
        barHeight: "40%",
        horizontal: true,
      },
    },

    xaxis: {
      categories: [
        "product 1",
        "product 2",
        "product 3",
        "product 4",
        "product 5",
      ],
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
    <div className="chart" style={{ width: '100%' }}>
      <ApexCharts
        options={options3}
        series={channelData}
        type="bar"
        width="100%"
        height={260}
        sx={{ padding: 0, margin: 0 }}
      />
    </div>

  );
}
