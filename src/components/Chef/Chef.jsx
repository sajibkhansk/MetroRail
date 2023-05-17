import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import Single from '../Single/Single';

const Chef = () => {
  const [chef, setChef] = useState([]);
  useEffect(()=>{
    fetch('https://chef-recipe-hunter-server-side-sajibkhansk.vercel.app/chef')
    .then(res=>res.json())
    .then(data=> setChef(data))
    .catch(error=>console.error(error))

  },[])
    return (
      <Container> 
  <Row>
        {
          chef.map(c=><Single data={c} key={c.id}></Single>)
        }
      </Row>
   
      </Container>
      
    );
};

export default Chef;