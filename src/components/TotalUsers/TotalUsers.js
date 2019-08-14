import React, { Component } from 'react';
import './TotalUsers.scss';


class TotalUsers extends Component {
  render(){
    return (
        <div className="totalusers-container">
            Total Users
            <div > {this.props.total} Users</div>
        </div>
    );
  }
}

export default TotalUsers;

