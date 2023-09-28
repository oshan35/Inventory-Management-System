import React, { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";

export default function RevenueCostChart() {
  const [channelData, setChannelData] = useState([]);

  useEffect(() => {
    setChannelData([
      {
        name: "Revenue",
        type: "column",
        data: [141, 250, 260, 270, 300, 330, 360, 400, 420, 1000, 1300, 1600],
      },
      {
        name: "Cost",
        type: "column",
        data: [341, 350, 460, 370, 400, 140, 150, 120, 220, 700, 300, 600],
      },
    ]);

    return () => {
      setChannelData([]);
    };
  }, []);

  let totalArray = [];
  const total = channelData.forEach((value) => {
    const data = value.data;
    if (totalArray.length === 0) totalArray = [...data];
    else {
      data.forEach((val, index) => (totalArray[index] += val));
    }
  });

  const options3 = {
    colors: ["#00D100", "#FF2E2E"],
    chart: {
      id: "basic-bar",
      type: "bar",
      stacked: false,
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
      text: "Cost & Revenue over Year",
    },
    plotOptions: {
      bar: {
        columnWidth: "30%",
        horizontal: false,
      },
    },
    fill: {
      opacity: 1,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aut",
        "Spt",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    tooltip: {
      fixed: {
        enabled: true,
        position: "topLeft",
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