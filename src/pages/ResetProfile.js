import React from 'react'
import { useState,useRef} from 'react'
import {Container,Button,Form,Alert,Card} from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import {db} from '../authentication/firebase'
import {useAuth} from '../authentication/AuthContext'


export default function Reset() {

    const history=useHistory();
    const{currentUser,updatePassword,updateEmail} = useAuth();
    const [error, seterror] = useState("");
    const[message,setmessage]=useState("");
    const[loading,setloading] = useState(false);
    const[original,setoriginal] = useState("");
    const emailRef=useRef();
    const passwordRef=useRef();
    const confirmRef=useRef();
    const usernameRef=useRef();

//     if(currentUser){
//         db.collection('user').doc(currentUser.uid).get().then(doc=>{
//             console.log(doc.data().username);
//             setoriginal(doc.data().username);  
            
      
//        });
       
       

//    }

    function handlesubmit(e){
        e.preventDefault()
        if (passwordRef.current.value !== confirmRef.current.value) {
          return seterror("Passwords do not match")
        }
    
        const promises = []
        setloading(true)
        seterror("")
        
        if(emailRef.current.value){
            if (emailRef.current.value !== currentUser.email) {
                promises.push(updateEmail(emailRef.current.value))
                
                
              }
        }
    
        
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
          }
    
        Promise.all(promises)
          .then(() => {
            history.push("/dashboard")
          })
          .catch(() => {
            seterror("Failed to update account")
          })
          .finally(() => {
            setloading(false)
          })

          if(loading){
            return <h1>Loading....</h1>
        }

    }
    return (
        <>
            <div>
                <h1 className="text-center">Change your credentials one at a time</h1>
            </div>
        <Container className="d-flex align-items-center justify-content-center"
       style={{minHeight:"100vh"}}>
       <div className="w-100" style={{maxWidth:"350px"}}>
         <Card>
             <Card.Body>
             {
                 error && <Alert variant="danger">{error}</Alert>
             }
             {
                 message && <Alert variant="success">{message}</Alert>
             }
             <Form onSubmit={handlesubmit}>
                 <Form.Group  className=" mt-4" id="email">
                     <Form.Label>Email address</Form.Label>
                     <Form.Control type="email" ref={emailRef} placeholder="Enter email" />
                     
                 </Form.Group>

                 {/* <Form.Group  className="mt-3" id="username">
                     <Form.Label>Username</Form.Label>
                     <Form.Control type="text" default={original} ref={usernameRef} placeholder="Username" />
                 </Form.Group> */}
 
                 <Form.Group  className="mt-3" id="password">
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="password" ref={passwordRef} placeholder="Password" />
                 </Form.Group>
                 <Form.Text className="text-muted">
                     We'll keep your password protected.
                 </Form.Text>
 
                 <Form.Group  className="mt-3" id="confirm">
                     <Form.Label>Confirm Password</Form.Label>
                     <Form.Control type="password" ref={confirmRef} placeholder="Password" />
                 </Form.Group>
 
                 
                 <Button variant="primary" className="w-100" type="submit">
                     Update
                 </Button>
             </Form>
             </Card.Body>
             </Card>
             </div>
             </Container>
         </>
    )
}
