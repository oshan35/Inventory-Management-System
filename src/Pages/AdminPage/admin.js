import React from 'react';
import NavbarEdited from "../../components/navbar/nav";
import PageHedder from "../../components/hedder/hedder";
import RevenueCostChart from '../../components/charts/costrevenewChart/costrevernewChart';
import './Dashboard.css';

export default function Admin() {
    return (
        <>
            <PageHedder />
            <div className="container">
                <div className="column">
                    <div className="nav-bar">
                        <NavbarEdited />
                    </div>
                    <div className="dashboard-content">
                        <div className="row">
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
