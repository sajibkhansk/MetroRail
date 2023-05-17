import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Register = () => {
    const {createUser, updateProfileData, logOut} =  useContext(AuthContext);
    const MySwal = withReactContent(Swal);
    const handleRegister = e =>{
        e.preventDefault();
       const form =e.target;
       const email = form.email.value;
       const name = form.name.value;
       const photo = form.photo.value;
        const password = form.password.value;
        if(password.length < 6){
            MySwal.fire({
                title: <strong>Invalid Password!</strong>,
                html: <i>Should be more than 6 character!</i>,
                icon: 'error'
              })
            return
        }
    console.log(email, name, password,photo);
    createUser(email, password)
    .then(result => {
        console.log(result.user);
        updateProfileData(name, photo)
        logOut()
        MySwal.fire({
            title: <strong>User Created!</strong>,
            html: <i>Now you can Login!</i>,
            icon: 'success'
          })
        e.target.reset()

    })
    .catch(error=>{
        console.log(error);
    })
    } 


    return (
        <Container>
            <h3 className='text-center'>Please Register</h3>
            <Form className='mb-5 border border-secondary w-50 p-3 mx-auto w-lg- ' onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button className='mb-3' variant="primary" type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-secondary ">
                    Already Have an Account? <Link to="/login">Login</Link>
                </Form.Text>

                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;