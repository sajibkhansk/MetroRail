import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
    
    const {signIn, signWithGoogle, googleProvider, signWithGithub, githubProvider } =useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            console.log(result.user);
            navigate(from, {replace : true})
        })
        .catch(error=>{
            console.log(error);
        })

    }

    const handleLoginWithGithub = () =>{
        signWithGithub(githubProvider)
        .then(result => {
            console.log(result.user);
            navigate(from, {replace : true})
        })
        .catch(error=>{
            console.log(error);
        })
    }
    const handleLoginWithGoogle = () =>{
        signWithGoogle(googleProvider)
        .then(result => {
            console.log(result.user);
            navigate(from, {replace : true})
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <Container>
            
            <Form  className='w-50 mx-auto  p-4' onSubmit={handleLogin}>
            <h3>Please Login</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Don't Have an Account? <Link to="/register">Register</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-dark text-center ">
                
                </Form.Text>
            </Form>
            <div className='text-center m-4'>
                <h4>Login With</h4>
            <Button onClick={handleLoginWithGithub} className="mx-auto me-1" variant="outline-primary"><FaGithub></FaGithub> Github</Button>
            <Button onClick={handleLoginWithGoogle}  variant="outline-secondary"><FaGoogle></FaGoogle> Google</Button>
            </div>
            
        </Container>
    );
};

export default Login;