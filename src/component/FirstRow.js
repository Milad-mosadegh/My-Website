import React, { Component } from 'react';
class FirstRow extends Component {
    render() {
        return (
            <div id="firstRow" className="row text-center">
                <div id="colHover" className="col-md-3 col-sm-12 p-3 ">
                    <h2>Concert Gallery</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum totam asperiores obcaecati officiis illum, deserunt similique iste ad libero a necessitatibus reprehenderit dolor dignissimos facilis provident ullam earum. Totam, fuga?</p>
                    <a href="#gallery" className="btn btn-outline-danger">See More</a>
                </div>
                <div id="colHover" className="col-md-3 col-sm-12 p-3 ">
                    <h2>Private Gallery</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum totam asperiores obcaecati officiis illum, deserunt similique iste ad libero a necessitatibus reprehenderit dolor dignissimos facilis provident ullam earum. Totam, fuga?</p>
                    <button className="btn btn-outline-danger">See More</button>
                </div>
                <div id="colHover" className="col-md-3 col-sm-12 p-3 ">
                    <h2>Song's</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum totam asperiores obcaecati officiis illum, deserunt similique iste ad libero a necessitatibus reprehenderit dolor dignissimos facilis provident ullam earum. Totam, fuga?</p>
                    <button className="btn btn-outline-danger">See More</button>
                </div>
                <div id="colHover" className="col-md-3 col-sm-12 p-3 ">
                    <h2>Videos</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum totam asperiores obcaecati officiis illum, deserunt similique iste ad libero a necessitatibus reprehenderit dolor dignissimos facilis provident ullam earum. Totam, fuga?</p>
                    <a href="#" className="btn btn-outline-danger">See More</a>
                </div>
            </div>
        );
    }
}







export default FirstRow;