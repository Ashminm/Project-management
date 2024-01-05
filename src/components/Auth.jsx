import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Auth({register}) {
    const registerform = register ? true : false
  return (
    <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center'>
        <div className="container w-75">
        <Link to={'/'} className='text-decoration-none'>Back to Home</Link>
        <div className="bg-dark p-5">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <img src="https://oliveconnection.com/wp-content/uploads/2020/07/signup@2x-8.png"   alt="" />
                </div>
                <div className="col-lg-6">
                    <div className="d-flex justify-content-center flex-column">
                        <div className="d-flex mt-2 text-light">
                            {/* <i></i> */}
                            <span className='h1 fw-bold'>Project Fair</span>
                        </div>
                        <h5 className="text-light">
                            {
                                registerform?'Sign Up For Project Fair':'Sign In For Project Fair'
                            }
                        </h5>
                        <form className='w-100 text-light mt-5'>
                            {
                                registerform&&
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Label>User name</Form.Label>
                                <Form.Control type="text" placeholder="User name" />
                            </Form.Group>
                            }
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                            
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="password" />
                            </Form.Group>
                                
                            {
                                registerform?
                                <div>
                                    <Button type='submit' className='btn btn-light'>Sign Up</Button>
                                    <Link className='ps-3' to={'/login'}>Already a User? Sign In</Link>
                                </div>:
                                <div>
                                    <Button type='submit' className='btn btn-light'>Sign In</Button>
                                    <Link className='ps-3' to={'/Register'}>New User? Sign Up</Link>

                                </div>
                            }
                               
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Auth