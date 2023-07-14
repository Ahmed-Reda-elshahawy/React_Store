import imageOne from '../images/image-3.jpg';
import imageTwo from '../images/image-1.jpg';
import './css/slider.css';
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
    return (
        <div className='suit-height'>
            <Carousel className='cover-color'>
                <Carousel.Item>
                    <img
                        className="d-block w-100 suit-height"
                        src={imageOne}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Welcome to Our Store</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 suit-height"
                        src={imageTwo}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Welcome to Our Store</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Slider;