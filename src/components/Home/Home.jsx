
import { Button, Carousel, Col, Container, Form, Image, Row } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { FaCalendar} from "react-icons/fa";
import ReactPlayer from 'react-player';
import React, { useState } from "react";
import '../Home/Home.css'
import video from '../../assets/Metro.mp4'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Home = () => {
  const [startDate, setStartDate] = useState(null);
    return (
      <div>
      <div className="video-background">
        <ReactPlayer
          url={video}
          playing
          loop
          muted
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      </div>
      <Container className="overlay-container">
        <div className="overlay-content">
        <Col><div className=''>
            <Row>
        <Col sm={5}>From
        <Form.Select aria-label="Default select example">
      <option>From Station</option>
      <option value="1">Uttara</option>
      <option value="2">Mirpur</option>
      <option value="3">badda</option>
    </Form.Select>
        </Col>
        <Col sm={5}>To
        <Form.Select aria-label="Default select example">
      <option>To Station</option>
      <option value="1">Uttara</option>
      <option value="2">Mirpur</option>
      <option value="3">badda</option>
    </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col sm={5}>Date of journey
        <DatePicker
      className='form-control'
      showIcon
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
        </Col>
        <Col sm={5}>Choose Train
        <Form.Select aria-label="Default select example">
      <option>To Station</option>
      <option value="1">Uttara</option>
      <option value="2">Mirpur</option>
      <option value="3">badda</option>
    </Form.Select></Col>
      </Row>
            </div></Col>
        <Col>
        
        </Col>
        </div>
      </Container>
      
    </div>
         
    );
};

export default Home;