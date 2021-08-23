import React,{useState,useEffect} from 'react'


import './read.css'
import { db } from '../authentication/firebase'
import {useAuth} from '../authentication/AuthContext'


export default function Read() {
    const [post, setpost] = useState([])

    useEffect(() => {
        db.collection('social').onSnapshot((snapshot)=>{
            setpost(snapshot.docs.map((document)=>({
                id:document.id,post:document.data()
            })))
        })
    },[])

    const{currentUser}=useAuth();


    return (
        <div className="feed mt-5">
            

             {

                 post.map(({id,post}) => {
                     return (
                        <div className="post" key={id}>
            
                        <div className="post-header">
                        <div className="post-header-left">
                        
                        <p style={{marginLeft:"15px"}}>{post.username}</p>
                        </div>
                        
                      </div> 
            
                      <div className="post_center">
                          <img className="post-img" src={post.photoUrl} alt="image"/>
                      </div> 
                      <div>
                          <p><span style={{marginRight:"10px"}}><strong>{post.username}</strong></span>
                          {post.caption}
                          </p>
                      </div> 

                      </div>
                     );
                 })
            }

        </div>
        
    );
 }
