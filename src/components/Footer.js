import { Col, Container, Row } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

export function Footer() {
    return (
        <div className="text-bg-dark p-5">
            <Container>
                <Row>
                    <Col>
                        <h4 className="mb-3">Customer Service</h4>
                        <ul className="list-unstyled">
                            <li className="mt-2">FAQ</li>
                            <li className="mt-2">Returns & Refunds</li>
                            <li className="mt-2">Terms & Conditions</li>
                            <li className="mt-2">Privacy & Policy</li>
                        </ul>
                    </Col>
                    <Col>
                        <h4 className="mb-3">Our Store</h4>
                        <ul className="list-unstyled">
                            <li className="mt-2">Store Locations</li>
                            <li className="mt-2">Store Hours</li>
                            <li className="mt-2">Store Events</li>
                        </ul>
                    </Col>
                    <Col>
                        <h4 className="mb-3">About Us</h4>
                        <ul className="list-unstyled">
                            <li className="mt-2">Our Story</li>
                            <li className="mt-2">News</li>
                        </ul>
                    </Col>
                    <Col className="text-center">
                        <h4 className="mb-3">Follow Us</h4>
                        <a href="https://www.facebook.com/profile.php?id=100027807314165" className="text-secondary text-decoration-none"> <BsFacebook className="fs-2 m-2" /> </a>
                        <a href="https://www.linkedin.com/in/ahmed-reda-768b34231/" className="text-secondary text-decoration-none"> <BsLinkedin className="fs-2 m-2" /> </a>
                        <a href="https://twitter.com/AhmedRedaEl" className="text-secondary text-decoration-none"> <BsTwitter className="fs-2 m-2" /> </a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}