import React, { useState } from 'react'
import {Button, Form} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../redux/actions'
import { Navigate } from "react-router-dom";

const SignUp = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {loading,users}=useSelector(state=>state.reducer)
    const dispatch=useDispatch()
    const handelSubmit=(e)=>{
        e.preventDefault()

        const newUser={
            fullName,
            email,
            password,
        }
        dispatch(registerUser(newUser))
    }
  return (
    <div>
      <Form>
        {
            loading? <h1>loading...</h1>
            :users? <Navigate to="/signin"/>
            :
        <>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e)=> setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="name" value={fullName} onChange={(e)=> setFullName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
      </Form.Group>
      <Button onClick={handelSubmit}>Submit</Button>
      </>
    }
    </Form>
    </div>
  )
}

export default SignUp