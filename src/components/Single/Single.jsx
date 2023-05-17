import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Single = (props) => {
const {id, picture, name, number_of_recipes, specialty,years_of_experience, likes} = props.data
    return (
        <Col className='mb-4' lg={4} sm={12}>
    <Card style={{ width: '25rem' }}>
      <Card.Img style={{height:'300px'}} variant="top" src={picture} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <p>
            Years of Experience: {years_of_experience}
        </p>
        <p>
            Numbers of recipes: {number_of_recipes}
        </p>
        <p>
            Likes: {likes}
        </p>
        <div className='d-flex justify-content-end text-white'>
            <Link to ={`/chef/${id}`}>
        <Button variant="primary">View Recipes</Button>

            </Link>
        </div>
      </Card.Body>
    </Card>
      </Col>
)};

export default Single;