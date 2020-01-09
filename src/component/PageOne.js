import React, { Component } from 'react';
import MyNavbar from './Navbar';
import Future from './Future'
import Caro from './Carousel';
import FirstRow from './FirstRow'
import Gallery from './Gallery'





class PageOne extends Component {
    render() {
        return (
            <div id="page-one" >
                <MyNavbar />
                <Caro />
                {/*    <FirstRow />
                <Future />
                <Gallery /> */}

            </div>
        );
    }
}

export default PageOne;