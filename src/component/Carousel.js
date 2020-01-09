import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap'
import "../App.css"
import Pic1 from '../images/pic1.JPG'
import Pic2 from '../images/pic2.PNG'
import Pic3 from '../images/pic3.JPG'

class Caro extends Component {
    render() {
        return (
            <div>
                <Carousel id="carousel">
                    <Carousel.Item>
                        <img id="pic1"
                            className="carousel-image"
                            src={Pic1}
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img id="pic2"
                            className="carousel-image"
                            src={Pic2}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carousel-image"
                            id="pic3"
                            src={Pic3}
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Caro;