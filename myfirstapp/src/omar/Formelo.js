import React from "react" ;
{/* importaion de nos composants bootstrap */}

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
{/* importation de notre fichier stylesheet */}

import './Formelo.css';
{/* fonction Formelo*/}

function Formelo () {
    return (
        <>
<h1 style={{color: "red"}}></h1>
<Form className='x'>
     <div className="y">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
{/* creation de fomulaire à l aide de composant form de bootstrap */}

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      </div>
      <div className="btn">
          {/* creation de button à l aide de composant bootstrap button  */}

      <Button variant="primary" type="submit">
        Submit
      </Button>
      </div>
    </Form>
        </>
    )
} 
export default Formelo ; 
