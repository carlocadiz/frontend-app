import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

import './LineChart.scss';

class LineChart extends Component {
    constructor(props){
    super(props);
    }
    render(){
      //  console.log('chart', this.props.dailyRegistered)
        let data = this.getData();
        console.log('data',data)
        return (
            <div className="line-chart-container">
                <div className="line-chart-wrapper">
                    <div className="line-chart-controls">
                        <div>Line Chart View</div>
                        <div>Mountain Chart View</div>
                        <div>
                            <select>
                                <option value='last_30'>Last 30 Days</option>
                            </select>
                        </div>
                    </div>
                    <div><Line

                        data={data}
                        height={100}

                    />
                    </div>
                </div>
            </div>
        );
    }


    getData(){
        return {
            datasets: [{
                label: 'users',
                data: this.props.dailyRegistered
            }]
        };
    }
}

export default LineChart;
