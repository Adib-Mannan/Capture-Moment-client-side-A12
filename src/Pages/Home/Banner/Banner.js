import React from 'react';
import { Carousel } from 'react-bootstrap';
import camera1 from '../../../images/Banner/camera-1.jpg'
import camera2 from '../../../images/Banner/camera-2.jpg'
import camera3 from '../../../images/Banner/camera-3.jpg'

const Banner = () => {
    return (
        <div >
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={camera1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>Capture Your Beautiful Moment</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={camera2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1>DSLR Motion Camera</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={camera3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>Pixel Perfect Camera</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;