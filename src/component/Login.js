import React, { Component } from 'react';
import '../App.css'
import $ from "jquery"

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = { user: "milad", pass: "1234" }
/*         this.submit = this.submit.bind(this)
 */    }


    componentDidMount = () => {
        /*      $("#signup").hide()
             $("#login").hide()
             $("#page-one").hide()
             $("#firstRow").hide()
      */

        $("#land-login").on("click", () => {
            // $("#landing").hide(500)
            /*  $("#login").fadeIn(500) */
        })

        $("#submit-btn").on("click", () => {
            let userName = document.getElementById("login-user")
            let userPass = document.getElementById("login-pass")
            if (this.state.user === userName.value && this.state.pass === userPass.value) {
                alert(`Welcome ${userName.value}, Enjoy Your Time`)
                $("#page-one").fadeIn(500)
                $("#firstRow").show()
                // $("#login").hide(500)
            } else {
                alert("The Password or The Username is wrong. Please try again ")
            }
        })

    }


    render() {
        return (
            <div id="login" className="App-header" >
                <div className="container w-50 text-center shadow p-5">
                    <h1 className="display-4 mb-5">Please Login ...</h1>

                    <input id="login-user" className="form-control mb-3" value="milad" type="text" name="in" placeholder="User Name" />
                    <input id="login-pass" className="form-control mb-3" value="1234" type="password" name="pass" placeholder="Enter Your Password" />

                    <button id="submit-btn" className="btn btn-outline-primary btn-block">Submit</button>
                    <a href="#signup" className="btn btn-outline-danger btn-block">Signup</a>
                </div>
            </div >
        );
    }
}

export default Login;