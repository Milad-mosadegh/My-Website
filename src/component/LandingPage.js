import React, { Component } from 'react';
import $ from 'jquery'

class LandingPage extends Component {

    componentDidMount = () => {
        // $("#firstRow").hide()
        $("#land-signup").on("click", () => {
            // $("#signup").fadeIn(500)
            // $("#landing").fadeOut(500)
        })
    }

    render() {
        return (
            <div id="landing" className="App-header ">
                <div className=" p-5 text-center  ">
                    <h1 className="display-4 shadow p-3" >Welcome To Our Page</h1>

                    <div className="shadow p-3 mb-3">
                        <p >If You wanna be a part of us</p>
                        <a id="land-signup" href="#signup" className="btn btn-outline-danger btn-block">Signup</a>
                    </div>

                    <div className="shadow p-3 mb-3">
                        <p>If You are already of us  </p>
                        <a id="land-login" href="#login" className="btn btn-outline-primary btn-block  ">Login</a>
                    </div>
                </div >
            </div >
        );
    }
}

export default LandingPage;