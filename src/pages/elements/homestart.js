import React from 'react'
import './start.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../../authentication/AuthContext'
export default function Homestart() {
  const{currentUser}=useAuth();
    return (
        <div>
            <div id="main-div" className="container">
    <div id="landing-div" className="row align-items-center justify-content-center">

      <div id="product-img-holder" className="col-12 col-md-7">

        <img className="img-fluid" src="https://images.unsplash.com/photo-1505155485412-30b3a45080ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=759&q=80" alt="main img"/>
      </div>
      <div className="col-12 col-md-5">
        <h2 className="text-dark font-weight-bold text-center text-md-left mt-5 mt-md-0">Transforming the  lives into the better ones</h2>
        <p className="text-dark text-center text-md-left">Youngistaan Foundation is an NGO based in India that works to improve the lives of the most underprivileged and disadvantaged people through programs that address: hunger, homelessness, poverty, education inequity, gender inequality, taboos on menstruation, emergency responses, animal rights, capacity building and many more issues.</p>
      <div id="register-btn-holder" className="d-flex justify-content-center justify-content-md-start">
        
        
      {!currentUser &&  <button id="register-btn" type="button" className="btn btn-lg bg-dark text-white rounded-pill px-5 text-center"><Link to="/signup">Register</Link></button>

      
      }
        </div>

      </div>
    </div>
  </div>
</div>
        
    )
}
