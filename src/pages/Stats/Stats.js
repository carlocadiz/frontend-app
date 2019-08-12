import React, { Component } from 'react';
import './Stats.scss';

import { LeftSidebar, Footer, ChartTable, DoughnutChart } from './../../components';

class Stats extends Component{

    render(){
         return (
            <div className="stats-container">
                <div className="navigation">
                    <LeftSidebar/>
                </div>
                <div className="content-wrapper" id="content-div">
                    <div className="overview-container">
                        <div className="overview-table"><ChartTable/></div>
                        <div className="overview-graph"><DoughnutChart /></div>
                    </div>
                    <div className="footer-container"><Footer/></div>
                </div>
            </div>
        );
    }
}

export default Stats;