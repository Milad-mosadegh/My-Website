import React, { Component } from 'react';
import $ from 'jquery'

import '../App.css'
import './NavStyle.css'


class MyNavbar extends Component {
    constructor(props) {
        super(props);

        this.state = { check: true }
        this.openNav = this.openNav.bind(this)

    }



    openNav = () => {

        if (this.state.check) {
            document.getElementById("mySidebar").style.width = "200px";
            document.getElementById("mySidebar").style.boxShadow = "5px 5px 5px rgba(0, 0, 0, 0.301)";
            document.getElementById("main").style.marginLeft = "200px";
            this.setState({ check: false })
            // document.getElementById("avaz").innerHTML = "X";

        } else {
            document.getElementById("mySidebar").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
            this.setState({ check: true })
            document.getElementById("avaz").innerHTML = "";
        }

    }



    render() {
        return (
            <div >
                <div className="sidebar2" width="30">
                    <button id="avaz" className="openbtn" onClick={this.openNav}>☰</button>
                </div>
                <div id="mySidebar" className="sidebar">
                    <a id="id-home" href="#home">Home</a>
                    <div className="singleBorder"></div>
                    <a id="id-video" href="#video">Videos</a>
                    <a id="id-music" href="#music">Music</a>
                    <a id="id-gallery" href="#gallery">Gallery</a>
                    <a id="id-contact" href="#contact">Contact</a>
                </div>
            </div>

        );
    }
}

export default MyNavbar;