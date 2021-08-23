import React from 'react'
import firebase from 'firebase'
import {db} from '../authentication/firebase'
import { useAuth } from '../authentication/AuthContext'
import {Card,Button,Alert} from 'react-bootstrap'
import './blog.css'
import { useRef,useState } from 'react'

export default function Createblog() {
    const [blogtitle, settitle] = useState('');
    const [content,setcontent]= useState('');
    const titleRef = useRef();
    const contentRef=useRef();
    const[userName,setUserName] = useState("");
    const[error,seterror] = useState("");
    const{currentUser} = useAuth();
    const[un,setun]=useState("");
    const[message,setmessage] = useState("");
  
//     db.collection('user').doc(currentUser.uid).get().then(doc=>{
//         debugger;

//         //console.log(doc.data().username);
//         setUserName(doc.data().username);  
        
//         console.log(doc.data().username);
       
//    });
    
  
//     console.log(userName);
   
    function handlesubmit(e){
       // console.log("There is ann error");
        e.preventDefault();
        
        
        if(blogtitle && content){
            db.collection("blogs").add({
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                title:blogtitle,
                content:content,
                name:un,
                id:currentUser.uid
    
            })
            
            setmessage("Successfully created blog. Go to read section to read it.");
        }

        
        

        
    }
function handlename(e){
    setun(e.target.value);
}

    function handlechange(e){
        settitle(e.target.value);
        console.log(blogtitle);
    }

    function handletext(e){
        setcontent(e.target.value);
        console.log(content);
        }

    return (
        <>
        <div>
            <h1 className="text-center">Share your contents with us through blogs</h1>
        </div>

        <div className="container mt-5" style={{width:"50%"}}>
            <form className="formD" style={{display:"flex",flexDirection:"column"}} onSubmit={handlesubmit}>
            {
                 message && <Alert variant="success">{message}</Alert>
             }
                    <input type="text"  onChange={handlechange} id="idtitle" className="blog-heading" style={{outline:"none",border:"none"}} placeholder="Enter title for your blog" />
                    <textarea onChange={handletext} id="idcontent" className=""  style={{marginTop:"20px"}} />
                    <input type="text"  onChange={handlename}  className="mt-3" style={{outline:"none",border:"none"}} placeholder="Enter name" />
                <Button type="submit" className="btn btn-primary mt-3" onSubmit={handlesubmit}>Submit</Button>
            </form>
        </div>
        </>
    )
}
