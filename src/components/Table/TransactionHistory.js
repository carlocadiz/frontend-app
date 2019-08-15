import React, { Component} from 'react';
import './Table.scss';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import ReactSearchBox from 'react-search-box'

class TransactionHistory extends Component {
  constructor(props){
    super(props);
    }

    render(){


       // console.log('history',this.props.transactionHistory)

     const columns = [{
         id: 'time',
         Header: 'Date',
       accessor: (data) => {
         return new Intl.DateTimeFormat().format(new Date(data.time))
         }
       // Header: 'Date',
       // accessor: 'time',
        // String-based value accessors!

    },{
        Header: 'Currency',
       accessor: 'currency',

    },{
        Header: 'Description',
       accessor: 'description',
   },{
       id: 'amount',
       Header: 'Amount',
      accessor: (data) => {
         return '$' + data.amount;
     }
  },{
       id: 'account_balance_cad',
       Header: 'Amount in CAD',
     accessor: (data) => {
         return '$' + data.account_balance_cad.toFixed(2);
     }
 }
 ]
       return(
            <div className="transactiontable-container">
                <div className="reacttable-container">
                    <div className="transaction-container">
                        <div className="table-title">Site Wide Transaction</div>
                        <div className="table-filters">
                            <div>
                                <select>
                                    <option  value='10'>10</option>
                                    <option  value='25'>25</option>
                                    <option  value='50'>50</option>
                                    <option  value='100'>100</option>
                                </select>
                            </div>
                            <div className="search-container">
                                <ReactSearchBox
                                    placeholder="search"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <ReactTable className="-striped"
                        data={this.props.transactionHistory}
                        //resolveData={data => data.map(row => row)}
                        columns={columns}
                        pageSize={10}
                        showPagination={true}
                        />
                    </div>
                </div>
            </div>
            );
        }
}
export default TransactionHistory;