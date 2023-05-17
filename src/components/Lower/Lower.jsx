import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const Lower = () => {
    return (
        <div>
            <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Chef Recipe Hunter</h5>
            <p>
              Chef Recipe Hunter is a website dedicated to helping people find the best recipes from around the world. Our team of chefs and food experts curate the latest and greatest recipes to help you create delicious meals at home.
            </p>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: info@chefrecipehunter.com</li>
              <li>Phone: 555-555-5555</li>
              <li>Address: 123 Main Street, Anytown, USA</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
            
              <li> <FaFacebook/> <a href="#">Facebook</a></li>
              <li> <FaTwitter></FaTwitter> <a href="#">Twitter</a></li>
              <li><FaInstagram></FaInstagram><a href="#">Instagram</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="bg-dark py-2">
        <Container>
          <p className="mb-0 text-white text-center">
            &copy; {new Date().getFullYear()} Chef Recipe Hunter. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
        </div>
    );
};

export default Lower;