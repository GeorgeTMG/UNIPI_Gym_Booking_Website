import { Form, Button, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import ReactFlagsSelect  from "react-flags-select";
import axios from 'axios';

export default function Register() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [username, setUsername] = useState()
    const [selectedCountry, setSelectedCountry] = useState()
    const [city, setCity] = useState()
    const [address, setAddress] = useState()
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/register", { firstName, lastName, username, email, password, country: selectedCountry, city, address })
        .then(result => {console.log(result)
        navigate("/login")
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow-lg rounded-4">
                            <div className="card-header text-white bg-dark text-white rounded-top-4">
                                <h3 className="fw-bold">Register a new account</h3>
                            </div>
                            <Form onSubmit={handleRegister}> 
                                <div className="card-body rounded-4 p-4">
                                    <div className="container px-5">
                                        <Form.Group className="mb-4">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control type="textarea" placeholder="Enter your First Name" 
                                            onChange={(e) => setFirstName(e.target.value)} 
                                            required 
                                            />
                                        </Form.Group>
                                        
                                        <Form.Group className="mb-4">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control type="textarea" placeholder="Enter your Last Name" 
                                            onChange={(e) => setLastName(e.target.value)} 
                                            required 
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-4">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control type="textarea" placeholder="Enter a Username" 
                                            onChange={(e) => setUsername(e.target.value)} 
                                            required 
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-4">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="name@example.com" 
                                            onChange={(e) => setEmail(e.target.value)} 
                                            required 
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-4">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Enter a password (8-12 characters)" 
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            pattern="^[A-Za-z0-9!@#$%^&*()_+=-]{8,12}$" 
                                            required 
                                            />
                                            {/* Password validation and print error message if invalid */}
                                            {password && !/^[A-Za-z0-9!@#$%^&*()_+=-]{8,12}$/.test(password) && (
                                            <small className="text-danger">
                                                Password must be 8–12 characters and can contain letters, numbers or special characters
                                            </small>
                                            )}
                                        </Form.Group>
                                        {/* Country drop-down selector */}
                                        <Form.Group className="mb-4">
                                            <Row>    
                                                <Col md={6}>
                                                    <Form.Label>Enter your Country of Origin</Form.Label>
                                                    <ReactFlagsSelect searchable
                                                        selected={selectedCountry}
                                                        onSelect={(code) => setSelectedCountry(code)}
                                                        required
                                                    />
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Label>City</Form.Label>
                                                    <Form.Control type="textarea" placeholder="Enter your City" 
                                                    onChange={(e) => setCity(e.target.value)} 
                                                    required 
                                                    />
                                                </Col>
                                            </Row>
                                        </Form.Group>

                                        <Form.Group className="mb-4">
                                            <Form.Label>Address</Form.Label>
                                            <Form.Control type="textarea" placeholder="Enter your full Address" 
                                            onChange={(e) => setAddress(e.target.value)} 
                                            required 
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="d-flex" id='register-btn'>
                                        <Button variant="primary" type="submit" className="fs-5 fw-bold w-100">Register</Button>
                                    </div>
                                    <div>
                                        <p className='mb-0 mt-3'>Already have an account?</p>
                                        <Button as={NavLink} to="/login" variant="success" className="fs-6 fw-bold">Login</Button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}