import React from 'react'
import "./vision1.css"

export default function Vision() {
    return (
        <div className="main-container container">

        <div className="main-section container mt-5">
            <div className="vision">
                <p style={{fontSize:"35px",fontWeight:"bold"}}>Vision</p>
                <p>Our main aim is to intervene and empower the disadvantaged.</p>
            </div>
            <div className="mission mt-3">
            <p style={{fontSize:"35px",fontWeight:"bold"}}>Mission</p>
                <p>Youngistaan Foundation is committed to making a difference in our communities by helping those in need. We are a platform for young people who are ready to create real change in the areas of hunger, homelessness, poverty, education inequity, gender inequality, taboos on menstruation, emergency responses, animal rights, capacity building and many more issues.</p>
            </div>
        </div>

        <div className="image-container">
        <img className="img-fluid mt-3 ml-1" src="https://images.unsplash.com/photo-1584605682321-c90435a0c4d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" aly="rural-places"/>
        </div>
        </div>
    )
}
