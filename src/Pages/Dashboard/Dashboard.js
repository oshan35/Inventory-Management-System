import React from 'react';
import NavbarEdited from "../../components/navbar/nav";
import PageHedder from "../../components/hedder/hedder";
import RevenueCostChart from '../../components/charts/costrevenewChart/costrevernewChart';
import './Dashboard.css';

export default function Dashboard() {
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
                            <div className='cost-revenew'>
                                <div className='col-5'>
                                    <RevenueCostChart className="graph-costrevanue"/>
                                </div>
                                
                            </div>
                            <div className='cost-revenew'>
                                <div className="column">
                                    <div className='col-6'>
                                        <RevenueCostChart className="graph"/>
                                    </div>
                                    <div className='col-6'>
                                        <RevenueCostChart className="graph"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
