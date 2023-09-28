import React, { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";
import { fetchChannelData } from "../../../api";

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

  // useEffect(() => {
    // setChannelData([
    //   {
    //     data: [3400, 3500, 3000, 4000, 4699],
    //   },
    // ]);

  //   return () => {
  //     setChannelData([]);
  //   };
  // }, []);

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
    <div>
      <ApexCharts
        options={options3}
        series={channelData}
        type="bar"
        width="100%"
        height={320}
      />
    </div>
  );
}
