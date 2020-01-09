import React, { Component } from 'react';
import '../App.css'

import Navbar from './Navbar'

class Video extends Component {
    render() {
        return (
            <div id="video" className="App-header p-5">
                <h3 id="video-header" className="display-3 p-3 w-50 text-center">Video's</h3>
                <div className="milad-fadeBorder"></div>
                <div className="row mt-5">
                    <div className="col-md-3 col-sm-6 text-center milad-hover milad-border p-3">
                        <iframe width="300" height="215" src="https://www.youtube.com/embed/wDVf8NjVrho" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <h4>Never Come Back please</h4>
                        <hr />
                        <p>This Music is Arranged by Me </p>
                    </div>
                    <div className="col-md-3 col-sm-6 text-center milad-hover milad-border p-3">
                        <iframe width="300" height="215" src="https://www.youtube.com/embed/m8RvAaLfv10" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <h4>I Love You</h4>
                        <hr />
                        <p>This Music is Arranged by Me </p>
                    </div>
                    <div className="col-md-3 col-sm-6 text-center milad-hover  milad-border p-3">
                        <iframe width="300" height="215" src="https://www.youtube.com/embed/zpZqrzQqyfI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <h4>Concert With Reza Sadeghi</h4>
                        <hr />
                        <p>I was a Guitar Player </p>
                    </div>
                    <div className="col-md-3 col-sm-6 text-center milad-hover milad-border p-3">
                        <iframe width="300" height="215" src="https://www.youtube.com/embed/nuuv7DkSVRo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <h4>I Love You</h4>
                        <hr />
                        <p>This Music is Arranged by Me </p>
                    </div>
                    <div className="col-md-3 col-sm-6 text-center milad-hover milad-border p-3">
                        <iframe width="300" height="215" src="https://www.youtube.com/embed/ozk583_ZiAg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <h4>I Love You</h4>
                        <hr />
                        <p>This Music is Arranged by Me </p>
                    </div>
                    <div className="col-md-3 col-sm-6 text-center milad-hover milad-border p-3">
                        <iframe width="300" height="215" src="https://www.youtube.com/embed/ozk583_ZiAg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <h4>I Love You</h4>
                        <hr />
                        <p>This Music is Arranged by Me </p>
                    </div>
                    <div className="col-md-3 col-sm-6 text-center milad-hover milad-border p-3">
                        <iframe width="300" height="215" src="https://www.youtube.com/embed/ozk583_ZiAg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <h4>I Love You</h4>
                        <hr />
                        <p>This Music is Arranged by Me </p>
                    </div>
                    <div className="col-md-3 col-sm-6 text-center milad-hover milad-border p-3">
                        <iframe width="300" height="215" src="https://www.youtube.com/embed/ozk583_ZiAg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <h4>I Love You</h4>
                        <hr />
                        <p>This Music is Arranged by Me </p>
                    </div>

                </div>

                <Navbar />
            </div >
        );
    }
}

export default Video;