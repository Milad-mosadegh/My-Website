import React, { Component } from 'react';
import '../App.css'

import Audio1 from '../music/Desert.mp3'

import Navbar from './Navbar'
import Music1 from '../images/amir-1.jpg'
import Music2 from '../images/hamid-1.jpg'
import Music3 from '../images/halekhosh.jpeg'
import Music4 from '../images/milad-1.jpeg'
import Music5 from '../images/Mohammad.jpg'
import Music6 from '../images/redband-1.jpg'
import Music7 from '../images/yejoor.jpg'
import Music8 from '../images/milad-hamid.JPG'
import Music9 from '../images/Deymahe-barooni.jpeg'
import Music10 from '../images/red-dooset.jpg'


class Music extends Component {
    constructor(props) {
        super(props);
    }
    imagefix = {
        width: '100%',
        height: '250px'
    }


    /*  play = () => {
         var audio = new Audio('/home/milad/Documents/MyWebSite/react-test/src/music');
         audio.play();
     } */

    render() {
        return (
            <div style={{ background: '#222' }} >
                <Navbar />

                <div id="music" className='App-header text-center' >

                    <h1 className="display-3 p-3 text-light" >This is My Gallery</h1>

                    < div className="milad-fadeBorder mb-5"></div>

                    <p>Here  You can Find some Of My Music That I Made them</p>

                    <hr />

                    <div className="container">
                        <div className="row mb-3">
                            <div className="col-md-3 col-sm-6 text-center milad-hover p-3">
                                <a target="_blank" href={Music1}> <img style={this.imagefix} src={Music1} /></a>

                                <h4 className="mt-4 mb-3">Ye Joore Khas</h4>

                                <audio controls>
                                    <source src={Audio1} type="audio/mpeg" />
                                </audio>

                                <a href="#" className='btn btn-outline-danger mt-4 '>Download Now</a>
                            </div>

                            <div className="col-md-3 col-sm-6 text-center milad-hover p-3">
                                <a target="_blank" href={Music2}> <img style={this.imagefix} src={Music2} /></a>
                                <h4 className="mt-4 mb-3">Ye Joore Khas</h4>

                                <audio controls>
                                    <source src={this.Audio1} type="audio/mpeg" />
                                </audio>

                                <a href="#" className='btn btn-outline-danger mt-4 '>Download Now</a>
                            </div>
                            <div className="col-md-3 col-sm-6 text-center milad-hover p-3">
                                <a target="_blank" href={Music3}> <img style={this.imagefix} src={Music3} /></a>
                                <h4 className="mt-4 mb-3">Ye Joore Khas</h4>

                                <audio controls>
                                    <source src={this.Audio1} type="audio/mpeg" />
                                </audio>
                                <a href="#" className='btn btn-outline-danger mt-4 '>Download Now</a>
                            </div>

                            <div className="col-md-3 col-sm-6 text-center milad-hover p-3">
                                <img style={this.imagefix} src={Music4} />
                                <h4 className="mt-4 mb-3">Ye Joore Khas</h4>

                                <audio controls>
                                    <source src={this.Audio1} type="audio/mpeg" />
                                </audio>
                                <a href="#" className='btn btn-outline-danger mt-4 '>Download Now</a>
                            </div>
                        </div>
                        {/*  */}
                        <div className="row mb-3">
                            <div className="col-md-3 col-sm-6 text-center milad-hover p-3">
                                <img style={this.imagefix} src={Music5} />
                                <h4 className="mt-4 mb-3">Ye Joore Khas</h4>

                                <audio controls>
                                    <source src={this.Audio1} type="audio/mpeg" />
                                </audio>
                                <a href="#" className='btn btn-outline-danger mt-4 '>Download Now</a>
                            </div>

                            <div className="col-md-3 col-sm-6 text-center milad-hover p-3">
                                <img style={this.imagefix} src={Music6} />
                                <h4 className="mt-4 mb-3">Ye Joore Khas</h4>

                                <audio controls>
                                    <source src={this.Audio1} type="audio/mpeg" />
                                </audio>
                                <a href="#" className='btn btn-outline-danger mt-4 '>Download Now</a>
                            </div>
                            <div className="col-md-3 col-sm-6 text-center milad-hover p-3">
                                <img style={this.imagefix} src={Music7} />
                                <h4 className="mt-4 mb-3">Ye Joore Khas</h4>

                                <audio controls>
                                    <source src={this.Audio1} type="audio/mpeg" />
                                </audio>
                                <a href="#" className='btn btn-outline-danger mt-4 '>Download Now</a>
                            </div>

                            <div className="col-md-3 col-sm-6 text-center milad-hover p-3">
                                <img style={this.imagefix} src={Music8} />
                                <h4 className="mt-4 mb-3">Ye Joore Khas</h4>
                                <audio controls>
                                    <source src={this.Audio1} type="audio/mpeg" />
                                </audio>
                                <a href="#" className='btn btn-outline-danger mt-4 '>Download Now</a>
                            </div>

                        </div>
                        <div className="row mb-3">
                            <div className="col-md-3 col-sm-6 text-center milad-hover p-3">
                                <img style={this.imagefix} src={Music9} />
                                <h4 className="mt-4 mb-3">Ye Joore Khas</h4>
                                <audio controls>
                                    <source src={this.Audio1} type="audio/mpeg" />
                                </audio>
                                <a href="#" className='btn btn-outline-danger mt-4 '>Download Now</a>
                            </div>

                            <div className="col-md-3 col-sm-6 text-center milad-hover p-3">
                                <img style={this.imagefix} src={Music10} />
                                <h4 className="mt-4 mb-3">Ye Joore Khas</h4>
                                <audio controls>
                                    <source src={this.Audio1} type="audio/mpeg" />
                                </audio>
                                <a href="#" className='btn btn-outline-danger mt-4 '>Download Now</a>
                            </div>

                            <div className="col-md-3 col-sm-6 text-center milad-hover p-3">
                                <img style={this.imagefix} src={Music7} />
                                <h4 className="mt-4 mb-3">Ye Joore Khas</h4>
                                <audio controls>
                                    <source src={this.Audio1} type="audio/mpeg" />
                                </audio>
                                <a href="#" className='btn btn-outline-danger mt-4 '>Download Now</a>
                            </div>

                            <div className="col-md-3 col-sm-6 text-center milad-hover p-3">
                                <img style={this.imagefix} src={Music8} />
                                <h4 className="mt-4 mb-3">Ye Joore Khas</h4>
                                <audio controls>
                                    <source src={this.Audio1} type="audio/mpeg" />
                                </audio>
                                <a href="#" className='btn btn-outline-danger mt-4 '>Download Now</a>
                            </div>
                        </div>
                    </div>

                </div>



            </div >
        );
    }
}

export default Music;