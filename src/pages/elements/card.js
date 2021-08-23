import React from 'react'
import {Card} from 'react-bootstrap'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './card.css'
import {GiFamilyHouse} from 'react-icons/gi'
import {FaPeopleCarry} from 'react-icons/fa'
import {GiReceiveMoney} from 'react-icons/gi'
import {FaCity} from 'react-icons/fa'

export default function Cards() {
    const percentage = 45;
    return (
        <div className="container card-container ">
            <div className="card-contents d-flex">
        <div className="card-one text-center">
                <div className="image text-center" style={{ fontSize: '50px'}}>
                <GiFamilyHouse/>
                </div>
                <div>
                <h3>15500+</h3>
                </div>
                <div>
                <h4>Happy Families</h4>
                </div>
        </div>


        <div className="card-one text-center">
                <div className="image text-center" style={{ fontSize: '50px'}}>
                <FaCity/>
                </div>
                <div>
                <h3>30+</h3>
                </div>
                <div>
                <h4>Places</h4>
                </div>
        </div>

        <div className="card-one text-center">
                <div className="image text-center" style={{ fontSize: '50px'}}>
                <FaPeopleCarry/>
                </div>
                <div>
                <h3>20,000+</h3>
                </div>
                <div>
                <h4>Volunteers</h4>
                </div>
        </div>

        <div className="card-one text-center">
                <div className="image text-center" style={{ fontSize: '50px'}}>
                <GiReceiveMoney/>
                </div>
                <div>
                <h3>23,00,000+</h3>
                </div>
                <div>
                <h4>Home made meals</h4>
                </div>
        </div>
        </div>
    </div>
    )
}
