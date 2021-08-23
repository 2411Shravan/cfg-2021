import React from 'react'
import "./acti.css"
import { Card ,Button} from 'react-bootstrap'

export default function Activity() {
    return (
        <div className="container activity text-center">
            <div className="main">
                <p style={{fontSize:"35px",fontWeight:"bold"}}><h1>Our Activities</h1></p>
            </div>
            <div className="acti-cards ">
                <div className="cardStyle text-center">
                <Card style={{ width: '17rem' }}>
                    <Card.Img variant="top" src="https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
                    <Card.Body>
                        <Card.Title><h3>Education</h3></Card.Title>
                        <Card.Text>
                        The Bright Spark Education Program is an out-of- school time program based on social pedagogy principles of ‘genuine care, dignity, and mutual respect’,
                        </Card.Text>
                        <Button variant="primary" href="https://youngistaanfoundation.org/programs/">Know More</Button>
                    </Card.Body>
                </Card>
                </div>


                <div className="cardStyle">
                <Card style={{ width: '17rem' }}>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1609252509102-aa73ff792667?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
                    <Card.Body>
                        <Card.Title><h3>Life Style</h3></Card.Title>
                        <Card.Text>
                        People living on the streets are one of the most overlooked and neglected people in India, who number between 1.7 million to 3 million people. We fulfill the personal hygiene ......
                        </Card.Text>
                        <Button variant="primary" href="https://youngistaanfoundation.org/programs/">Know More</Button>
                    </Card.Body>
                </Card>
                </div>


                <div className="cardStyle">
                <Card style={{ width: '17rem' }}>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1618245472861-b2b4e88431ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
                    <Card.Body>
                        <Card.Title><h3>Food-Nutrition</h3></Card.Title>
                        <Card.Text>
                        Hunger affects millions of people in India, causing severe health complications and even death. We have served the needs of people suffering with hunger and starvation by:
                        </Card.Text>
                        <Button variant="primary" href="https://youngistaanfoundation.org/programs/">Know More</Button>
                    </Card.Body>
                </Card>
                </div>


                <div className="cardStyle">
                <Card style={{ width: '17rem' }}>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
                    <Card.Body>
                        <Card.Title><h3>Health</h3></Card.Title>
                        <Card.Text>
                        Youngistaan Foundation maintains a database of blood donors who have signed up with us to donate blood at their local hospitals and medical facilities ....
                        </Card.Text>
                        <Button variant="primary" href="https://youngistaanfoundation.org/programs/">Know More</Button>
                    </Card.Body>
                </Card>
                </div>
            </div>
        </div>
    )
}
