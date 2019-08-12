import React, { Component } from 'react';
import './Exchange.scss';

import { LeftSidebar, Footer } from './../../components';

class Exchange extends Component{

    render(){
         return (
            <div className="exchange-container">
                <div className="navigation">
                    <LeftSidebar/>
                </div>
                <div className="content-wrapper" id="content-div">

                    <div className="footer-container"><Footer/></div>
                </div>
            </div>
        );
    }
}

export default Exchange;