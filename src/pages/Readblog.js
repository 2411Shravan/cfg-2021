import React from 'react'
import {db} from '../authentication/firebase'
import {useEffect,useState} from 'react'
import {Card,Container,Button} from 'react-bootstrap'
import './blog.css'
import {useAuth} from '../authentication/AuthContext'

export default function Read() {

    const[post,setpost]=useState([]);
    const[value,setvalue]=useState();
    const {currentUser} = useAuth();
    const arr=[];
    
        

        useEffect(() => {
            db.collection('blogs').orderBy('timestamp', 'desc').onSnapshot((snapshot)=>{
                setpost(snapshot.docs.map((document)=>({
                    
                    id:document.id,post:document.data()
                })))
            })
        },[])


        

      function deletepost(e){
          debugger;
        e.preventDefault();
       

            console.log(post);
            // console.log(pos.id);
            // console.log(currentUser.uid);
                
                
                db.collection('blogs').doc("EqyhDBIbC3xfY5CWR63Z").delete().then(function(){
                    console.log("Deletion of post was successful");
                }).catch(function(error){
                    console.log(`An error was occured ${error}`);
                })

      }
   
      
    


    return (
        <div className="text-center mt-3">
            <h1>Blogs...</h1>
            
            
        {

                 post.map(({id,post}) => {
                    
                     return (
                         <Container className="d-flex align-items-center justify-content-center">
                             <div className="w-100" style={{maxWidth:"850px"}}>
                         <Card className="bloginfo">
                             <Card.Body>
                         <div id="li" >
                            
                            <h3 style={{fontSize:"40px",fontWeight:"bold"}}>{post.title}</h3>
                            <h5>{post.content}</h5>
                            <h6>By-{post.name}</h6>
                           
                               
                            
                        </div>
                        </Card.Body>
                        </Card>
                        </div>
                        </Container>
                     )
                     
                 })
                }
           
        </div>
    )
}
