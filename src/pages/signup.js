import React from 'react'
import { Container,Form,Group,Card,Button,Alert,DropdownButton,Dropdown } from 'react-bootstrap'
import {useState,useRef} from 'react'
import { useHistory } from 'react-router-dom';
import {useAuth} from '../authentication/AuthContext'


import Login from './login';
import { db } from '../authentication/firebase';


export default function Signup() {


    const {signup} = useAuth();
    const emailRef=useRef();
    const passwordRef=useRef();
    const confirmRef=useRef();
    const history=useHistory();
    const usernameRef=useRef();
    const phRef=useRef();
    
    const ageRef=useRef();
    const [UserName,setusername] = useState("");
    const[messages,setmessages]=useState("");
    const[error,seterror]=useState("");
    const[loading,setloading]=useState(false);
    const value="";

    function handleDropdownChange(e) {
        
        value= e.target.value ;
      }


    async function handlesubmit(e){
        e.preventDefault();
        console.log(value);
        if(passwordRef.current.value!==confirmRef.current.value){
           return seterror("Password and confirm do not match.Please type both field correctly");
        }
        setusername(usernameRef.current.value);
        console.log(UserName);
        try{

                setloading(true);
                await signup(emailRef.current.value,passwordRef.current.value,usernameRef.current.value,phRef.current.value,ageRef.current.value)
                setloading(false);
                setmessages("Successfully created account");
                history.push('/dashboard')
        }
        catch(e){
            seterror("Sorry try again.Check that the entered mail does already have account");
            console.log(error);
            setloading(false);
        }
    }

    if(loading){
        return (
            <div className="container text-center">
                <h1>Loading...</h1>
            </div>
        );
    }
    

    return (
        <>
            
        <Container className="d-flex align-items-center justify-content-center mt-5"
       style={{minHeight:"100vh"}}>
       <div className="w-100" style={{maxWidth:"350px"}}>
         <Card>
             <Card.Body>
             {
                 error && <Alert variant="danger">{error}</Alert>
             }
             {
                 messages && <Alert variant="success">{messages}</Alert>
             }
             <Form onSubmit={handlesubmit}>


             <Form.Group  className="mt-3" id="Username">
                     <Form.Label>Your name</Form.Label>
                     <Form.Control type="text" ref={usernameRef} placeholder="Name" required/>
            </Form.Group>



                 <Form.Group  className=" mt-4" id="email">
                     <Form.Label>Email address</Form.Label>
                     <Form.Control type="email" ref={emailRef} placeholder="Enter email" required/>
                     
                 </Form.Group>


                 <Form.Group  className="mt-3" id="Phone Number">
                     <Form.Label>Phone Number</Form.Label>
                     <Form.Control type="text" ref={phRef} placeholder="Phone Number" required/>
                 </Form.Group>

                
                 


                 <Form.Group  className="mt-3" id="Age">
                     <Form.Label>Age</Form.Label>
                     <Form.Control type="text" ref={ageRef} placeholder="Age" required/>
                 </Form.Group>


                 <Form.Group  className="mt-3" id="Choice">
                 <DropdownButton id="dropdown-basic-button" title="Area of work" onChange={handleDropdownChange}>
                <Dropdown.Item value="Education">Education</Dropdown.Item>
                <Dropdown.Item value="Livelihood">Livelihood</Dropdown.Item>
                <Dropdown.Item value="Food and nutrition">Food and nutrition</Dropdown.Item>
                <Dropdown.Item value="Gender Program">Gender Program</Dropdown.Item>
                <Dropdown.Item value="Animal Care">Animal Care</Dropdown.Item>
                <Dropdown.Item value="Blood Donors">Blood Donors</Dropdown.Item>
                </DropdownButton>
                </Form.Group>
 
                 <Form.Group  className="mt-3" id="password">
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="password" ref={passwordRef} placeholder="Password" required/>
                 </Form.Group>
                 <Form.Text className="text-muted">
                     We'll keep your password protected.
                 </Form.Text>
 
                 <Form.Group  className="mt-3" id="confirm">
                     <Form.Label>Confirm Password</Form.Label>
                     <Form.Control type="password" ref={confirmRef} placeholder="Password" required/>
                 </Form.Group>
 
                 <Form.Group controlId="formBasicCheckbox" className="mt-3">
                     <Form.Check type="checkbox" label="Accept all privacy terms" required/>
                 </Form.Group>
                 <Button variant="primary" className="w-100" type="submit">
                     Submit
                 </Button>
             </Form>
             </Card.Body>
             </Card>
             </div>
             </Container>
         </>
    )
}
