import React from 'react'
import {db} from '../authentication/firebase'
import {useAuth} from '../authentication/AuthContext'
import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
export default function Dashboard() {
    const{currentUser}=useAuth();
    const[curUser,setcurUser]= useState("");
    
    const[email,setenmail]=useState("");
    const[ph,setph]=useState("");
    const[age,setage]=useState(0);

 useEffect(()=>{
    db.collection('user').doc(currentUser.uid).get().then(doc=>{
             
        console.log(doc.data().username);
        setph(doc.data().phonenumber); 
        setage(doc.data().userage); 
        setcurUser(doc.data().username); 
        console.log(currentUser.email);
  
   });

 },[])
         
        
        

  


  
    return (
        <div className="container mt-4">
            
            <h1 className="text-center">Welcome {curUser}</h1>

            <div className="container text-center">
                <div className="heading"><h2 className="mt-4">Your registration credentials are : </h2></div>
                <div>
                    <h2>Name : {curUser}</h2>
                    <h2>Email : {currentUser.email}</h2>
                    
                    
                    
                </div>
            </div>
            
        </div>
    )
}
