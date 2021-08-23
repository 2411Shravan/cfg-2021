import React from 'react'
import Homestart from './elements/homestart'
import Vision from './elements/vision'
import Card from './elements/card'
import Carousel from './elements/carousel'
import Activity from './elements/act'
import Contact from './elements/contact'
import "./home.css"


export default function Home() {
    return (
        <div className="wrap">
        <div>
            <Homestart/>
        </div>
        <div>
            <Vision/>
        </div>
        <div>
            <Card/>
        </div>
        <div>
            <Carousel/>
        </div>
        <div>
            <Activity/>
        </div>
        <div>
            <Contact/>
        </div>
        </div>
    )
}
