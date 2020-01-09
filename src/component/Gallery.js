import React, { Component } from 'react';
import $ from 'jquery'
import '../App.css'
import Pic1 from '../images/pic1.JPG'
import Pic2 from '../images/pic2.PNG'
import Pic3 from '../images/pic3.JPG'
import Pic4 from '../images/back1.jpg'
import Navbar from './Navbar'
import Caro from './Carousel'

class Gallery extends Component {


    componentDidMount() {

    }



    render() {
        return (
            <div>

                <div id="gallery" className=" App-header text-center pb-3">
                    <Navbar />

                    <h1 className="display-3 p-3 text-light">This is My Gallery</h1>
                    <div className="milad-fadeBorder"></div>
                    <p className="text-light mt-5 mb-5">asjdi au vweiue pquwq piuqweencpq iuqwefbbqpiucb qiucqpiwbe</p>

                    <Caro />
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 p-2 milad-hover">
                                <a target="_blank" href={Pic1}> <img className="gi" src={Pic1} /></a>
                            </div>
                            <div className="col-md-3 col-sm-6 p-2 milad-hover">
                                <a target="_blank" href={Pic2}> <img className="gi" src={Pic2} /></a>
                            </div>
                            <div className="col-md-3 col-sm-6 p-2 milad-hover">
                                <a target="_blank" href={Pic3}> <img className="gi" src={Pic3} /></a>
                            </div>
                            <div className="col-md-3 col-sm-6 p-2 milad-hover">
                                <a target="_blank" href={Pic4}> <img className="gi" src={Pic4} /></a>
                            </div>
                        </div>
                        <hr />

                        <button className="btn btn-outline-danger mt-4 btn-block p-2" >See More</button>
                    </div>

                </div >
            </div>
        );
    }
}

export default Gallery;