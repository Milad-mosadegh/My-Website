import React, { Component } from 'react';
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from "jquery"

import '../App.css'
import Navbar from './Navbar'
class Home extends React.Component {

    componentDidMount() {
        $(document).ready(
            $("#h1,#para").hide(),



            $("#h1").fadeIn(1000),
            $("#para").fadeIn(8000),
            $("#all").animate({ width: '700', fontSize: '20px' }, 2000),
            $(".homeBG").fadeIn(1000),


        )
    }

    render() {

        let h1Style = {
            background: 'transparent'
        }


        return (
            <div id="home" className="App-header homeBG">

                <div id="all" style={{ width: '700px' }} className="text-center milad-shadow ">
                    <div className="milad-fadeBorder"></div>
                    <div className="m-5" style={h1Style}>

                        <h1 id="h1" className=" p-3 text-light text-center" style={{ background: "transparent" }} >Milad Mosadegh</h1>
                        <h4 id='para'>Welcome To My WebSite</h4>
                    </div>
                    < div className="milad-fadeBorder"></div>
                </div>
                <Navbar />

            </div>
        );
    }
}

export default Home;