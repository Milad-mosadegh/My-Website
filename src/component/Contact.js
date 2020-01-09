import React, { Component } from 'react';
import '../App.css'
import $ from 'jquery'

import Insta from '../images/insta.PNG'
import Face from '../images/face.png'
import You from '../images/you.png'
import Gmail from '../images/gmail.png'

class Contact extends Component {

    render() {
        return (
            <div id="contact" className="App-header">
                <div className="container text-center p-5 milad-shadow milad-border">

                    <h3 className="display-4 p-5 text-light" style={{ borderBottom: '2px solid red' }}>Here You can finD Me</h3>

                    <div id="allPic" className=" p-5  ">
                        <div className="text-center blo">
                            <img className="p-3 aks" src={Insta} />
                            <p>Instagram</p>
                        </div>
                        <img className="p-3 aks" src={Face} />
                        <img className="p-3 aks" src={You} />
                        <img className="p-3 aks" src={Gmail} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;