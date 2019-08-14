import React, { Component } from 'react';
import './Stats.scss';

import { LeftSidebar, Footer, ChartTable, DoughnutChart, TransactionTable, TotalUsers, LineChart } from './../../components';

class Stats extends Component{
    constructor(){
    super();
    this.state = {
      totalUsers: 0,
      dailyRegistered: []
    }
}

    componentDidMount() {
        fetch('http://178.128.233.31/frontend/stats/total_users')
          .then(response=> response.json())
          .then(total_users=> {
              this.setState({ totalUsers: total_users.user_count})});


        fetch('http://178.128.233.31/frontend/stats/daily_registered_users', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              "time_period_days":90
            })
          })
            .then(response => response.json())
            .then(data => { this.setState({
                dailyRegistered: data.stats.map( day => {
                    return{
                      x: day.date,
                      y: day.count
                    }
                })
            })})
    }





    render(){
         return (
            <div className="stats-container">
                <div className="navigation">
                    <LeftSidebar/>
                </div>
                <div className="content-wrapper" id="content-div">
                   <div className="totalusers-container"><TotalUsers total={this.state.totalUsers}/></div>
                   <div className="graph-container"><LineChart dailyRegistered ={this.state.dailyRegistered} /></div>
                   <div className="table-container"><TransactionTable /></div>
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