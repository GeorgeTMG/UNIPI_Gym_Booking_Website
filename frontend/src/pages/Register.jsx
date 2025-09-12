import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";

export default function Register() {

    const onRegisterClick = () => {
        console.log("TEST")
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
                            <Form> 
                                <div className="card-body rounded-4 p-4">
                                    <div className="container px-5">
                                        <Form.Group className="mb-4">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control type="textarea" placeholder="John" />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control type="textarea" placeholder="Doe" />
                                        </Form.Group>
                                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="name@example.com" />
                                        </Form.Group>
                                        <Form.Group className="mb-4" controlId="formPlaintextPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Enter a password (8-12 characters)" />
                                        </Form.Group>
                                    </div>
                                    <div className="d-flex" id='register-btn'>
                                        <Button variant="primary" className="fs-5 fw-bold w-100" onClick={() => onRegisterClick}>Register</Button>
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