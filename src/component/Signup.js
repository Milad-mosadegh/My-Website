import React, { Component } from 'react';
import $ from 'jquery'
import Navbar from './Navbar'

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "", email: "", birth: "", pass: "", repass: "" }


    }

    componentDidMount = () => {
        $("#signup-submit").on("click", function onChange() {
            alert("You are registered ")
            $("#login").fadeIn(500);
            $("#signup").fadeOut(500);


        })

    }
    render() {
        return (
            <div>
                <Navbar />
                <div id="signup" className="App-header" >
                    <div className="container w-50 text-center shadow p-5">
                        <h1 className="display-4 mb-5">Please Signup ...</h1>
                        <input id="signup-name" className="form-control mb-3" type="text" name="userInput" placeholder="Enter Your Lovley User Name" />
                        <input id="signup-email" className="form-control mb-3" type="email" name="email" placeholder="Enter your E-Mail Address" />
                        <input id="signup-birth" className="form-control mb-3" type="date" name="birthday" />
                        <input id="signup-pass" className="form-control mb-3" type="password" name="pass" placeholder="Enter Your Password" />
                        <input id="signup-repass" className="form-control mb-3" type="password" name="rePass" placeholder="Reenter Your Password" />

                        <button id="signup-submit" className="btn btn-outline-danger btn-block">Submit</button>
                        <a href="#login" className="btn btn-outline-primary btn-block">Login</a >
                    </div>
                </div >
            </div>


        );
    }
}

export default Signup;