import React, {useState} from "react";
import RevenueCostChart from "../../components/charts/costrevenewChart/costrevernewChart";
import BestSelledProductChartBar from "../../components/charts/bestSalledProductChart/bestSalledProductChart";
import NavbarEdited from "../../components/navbar/nav";
import PageHedder from "../../components/hedder/hedder";
import "./Dashboard.css"
import { Box, Grid, Paper } from "@mui/material";

const Dashboard = () => {
    return (
        <>
            <PageHedder/>
            <div className="container">
                <div class = 'nav-dash'>
                    <NavbarEdited/>
                </div>
                <div class= "main-container">
                    <div class="data-cards">
                        data-cards
                    </div>
                    <div class="charts">
                        <div class="charts-card">
                            <RevenueCostChart/>
                        </div>
                        <div class="charts-card">
                            <BestSelledProductChartBar/>
                        </div> 
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;