import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'


const Login = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <FormContainer>
      <h1>Sign In</h1>

      <Form >
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Sign In
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          New Customer?{' '}
          {/* <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Register
          </Link> */}
          <Link to='/register'>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default Login
