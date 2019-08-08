import React, { Component } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import axios from "axios";
const jwt = require('jsonwebtoken');
const url = "http://178.128.233.31/backend";


class MountainChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lineChartData: [],
            investmentType: [],
            xAxisData: []
        };
    };
    componentDidMount() {
        this.loadData();
        setInterval(this.loadData, 30000);
    }
    loadData = async e => {
        let token = localStorage.getItem('userToken');
        const decoded = jwt.decode(token, { complete: true });
        const userName = decoded.payload.user;
        try {
            axios.post(url + "/users/balance_history", {
                username: userName,
                time_period_days: 30
            }).then(res => {
                var result = [];
                const count = res.data.balance_history.length;
                const investment = [];
                for (var i = 0; i < count; i++) {
                    investment.push(this.getBalanceHistoryData(res.data.balance_history[i]))
                }
                var date = [];
                var dataset = [];
                console.log(investment[0].account_history.length);
                for (var x = investment[0].account_history.length - 1; x >= 0; x--) {
                    date.push(investment[0].account_history[x].date);
                }
                this.setState({
                    xAxisData: date
                });
                console.log(this.state.xAxisData);
                for (var j = 0; j < investment.length; j++) {
                    dataset.push(this.getDataset(investment[j]));
                    // let customData = {
                    //     labels: date,
                    //     datasets: dataset
                    // }
                    this.setState({
                        lineChartData: dataset
                    })
                    console.log(this.state.lineChartData[0].data);
                }
            });
            
        } catch (e) {
            console.log(e);
        }
    };
    getBalanceHistoryData = info => {
        return {
            investment_name: info.investment_name,
            account_history: info.account_history
        };
    };

    getDataset = result => {
        var amountData = [];
        for (var i = 0; i < result.account_history.length; i++) {
            amountData.push(result.account_history[i].account_balance_cad);
        }
        return {
            label: result.investment_name,
            data: amountData.reverse()
        }
    };
    getData() {
        return {
            chart: {
                type: 'area'
            },
            title: {
                text: ''
            },
            xAxis: {
                allowDecimals: false,
                labels: {
                    formatter: function () {
                        return this.value; // clean, unformatted number for year
                    }
                }
            },
            yAxis: {
                title: {
                    text: 'Nuclear weapon states'
                },
                labels: {
                    formatter: function () {
                        return this.value / 1000 + 'k';
                    }
                }
            },
            tooltip: {
                pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
            },
            plotOptions: {
                area: {
                    pointStart: 1940,
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                }
            },
            series: [
                
               
                {
                name: 'USA',
                data: [
                    null, null, null, null, null, 6, 11, 32, 110, 235,
                    369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468,
                    20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,
                    26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
                    24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586, 22380,
                    21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950, 10871, 10824,
                    10577, 10527, 10475, 10421, 10358, 10295, 10104, 9914, 9620, 9326,
                    5113, 5113, 4954, 4804, 4761, 4717, 4368, 4018
                ]
            }
            , {
                name: 'USSR/Russia',
                data: [null, null, null, null, null, null, null, null, null, null,
                    5, 25, 50, 120, 150, 200, 426, 660, 869, 1060,
                    1605, 2471, 3322, 4238, 5221, 6129, 7089, 8339, 9399, 10538,
                    11643, 13092, 14478, 15915, 17385, 19055, 21205, 23044, 25393, 27935,
                    30062, 32049, 33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000,
                    37000, 35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
                    21000, 20000, 19000, 18000, 18000, 17000, 16000, 15537, 14162, 12787,
                    12600, 11400, 5500, 4512, 4502, 4502, 4500, 4500
                ]
            }
        ]
        }
    };

    render() {
        var chartOptions = this.getData();
        return (
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={chartOptions}
                />
            </div>
        )
    }
}

export default MountainChart;