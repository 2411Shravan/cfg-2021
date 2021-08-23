import React from 'react'
import { Route,Redirect } from 'react-router-dom'
import { useAuth } from './AuthContext'
import {Link} from 'react-router-dom'

export default function Privateroute({component:Component, ...rest}) {
   
   const{currentUser}=useAuth();
   
    return (
        <Route {...rest}
        render={props=>{
           return currentUser ? <Component {...props}/>:<h1 className="text-center">Please login to access this</h1>
        }}>
            
        </Route>
    )
}
