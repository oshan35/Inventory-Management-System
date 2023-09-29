import React, { Component } from "react";
import { Box, Grid, Paper } from "@mui/material";
import RevenueCostChart from "../../components/charts/costrevenewChart/costrevernewChart";
import BestSelledProductChartBar from "../../components/charts/bestSalledProductChart/bestSalledProductChartBar";
import BestSelledProductChart from "../../components/charts/bestSalledProductChart/bestSellingProductChart";
import NavbarEdited from "../../components/navbar/nav";
import PageHedder from "../../components/hedder/hedder";
import "./Dashboard.css"


export default class Revenue extends Component {
  render() {
    const revenuCards = [
      {
        isMoney: true,
        number: "23 000",
        percentage: 55,
        upOrDown: "up",
        color: "green",
        title: "Total Sales This Year",
        subTitle: "vs prev year",
      },
      {
        isMoney: true,
        number: "3500",
        percentage: 70,
        upOrDown: "up",
        color: "green",
        title: "Revenue This Year",
        subTitle: "vs prev year",
      },
      {
        isMoney: true,
        number: "2000",
        percentage: 12,
        upOrDown: "down",
        color: "red",
        title: "Cost This Year",
        subTitle: "vs prev year",
      },
      {
        isMoney: true,
        number: "98 000",
        percentage: undefined,
        title: "Revenue Total",
        subTitle: "vs prev year",
      },
    ];
    return (
      <>
        <PageHedder/>
        <div className="container">
          <div class='nav-dash'>
              <NavbarEdited/>
          </div>

          <div class= "main-container">
            <Box sx={{ p: 0, mx: 0 }}>
              <Grid container sx={{ mx: 4 }}>
                  
              </Grid>
              <Grid container spacing={2} sx={{ mx: 0 }}>
                <Grid item md={12}>
                  <Box m={4} sx={{mx:0, width: '95%', height:'300px', boxShadow: 3, p: 3 }}>
                    <RevenueCostChart />
                  </Box>
                  
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ mx: 0 }}>
                  <Grid item md={6}>
                    <Box width="90%" sx={{padding: 0,mx:0, boxShadow: 3, p: 3 }}>
                      <BestSelledProductChart/>
                    </Box>
                  </Grid>
                  <Grid item md={6}>
                    <Box width="90%" sx={{padding: 0,mx:0,boxShadow: 3, p: 3 }}>
                      <BestSelledProductChartBar />
                    </Box>
                  </Grid>
              </Grid>

            
            </Box>
          </div>

        </div>
      </>

    );
  }
}
