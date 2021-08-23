import React from 'react';
import Slider from 'infinite-react-carousel';
import './carousel.css'
export default function Carouselanime (){

   

    return (
      <div className="container topCont">
        <div className="mainContainer">
            <div className="heading text-center">
            <h1 style={{fontSize:"35px",fontWeight:"bold"}}>Our Sponsorors</h1>
            </div>

            <div className="img-container text-center">
                <div className="Sponsor-images mr-2">
                    <img style={{width:"250px",height:"200px"}} src="https://mma.prnewswire.com/media/804087/synchrony.jpg?p=facebook" alt="sponsors" />
                </div>
                <div className="Sponsor-images mr-2">
                    <img style={{width:"250px",height:"200px"}} src="http://fresheropenings.com/wp-content/uploads/2019/07/wipro.jpg" alt="sponsors" />
                </div>
                <div className="Sponsor-images mr-2">
                    <img style={{width:"250px",height:"200px"}} src="https://csrbox.org/company/cmp_logo/1540363502Dr_reddys_logo_(1).jpg" alt="sponsors" />
                </div>
                <div className="Sponsor-images mr-2">
                    <img style={{width:"250px",height:"200px"}} src="https://wallpapercave.com/wp/wp4045342.jpg" alt="sponsors" />
                </div>
            </div>
        </div>
      </div>
    );
  }
