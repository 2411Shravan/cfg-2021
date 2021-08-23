import React from 'react'
import {Navbar,Nav,Link,NavDropdown} from 'react-bootstrap'
import {useAuth} from '../authentication/AuthContext'
import { useHistory } from 'react-router-dom';

export default function Navigationbar() {
    const {logout,currentUser} = useAuth();
    const history = useHistory();
    
        async function handlelogout(e){
            e.preventDefault();
            try{
                await logout();
                history.push('/');
            }
            catch(e){
                console.log("someting wrong sorry");
            }
        }

    return (
        <div>
            <Navbar  expand="lg">
                <Navbar.Brand href="/"><img src="https://youngistaanfoundation.org/wp-content/uploads/2014/10/youngistaan-270x270.png" alt="YOUNGISTAAN" style={{width:"70px",height:"70px"}}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav >
                        {
                          !currentUser && <Nav.Link href="/">Home</Nav.Link>
                        }
                    
                        {
                          !currentUser && <Nav.Link href="/login">Login</Nav.Link>
                        }
                        {
                          !currentUser && <Nav.Link href="/signup">Signup</Nav.Link>
                        }
                        {
                          !currentUser && <Nav.Link href="https://youngistaanfoundation.org/contact/">Contact</Nav.Link>
                        }
                        {
                          currentUser && <Nav.Link href="/create-blog">Create A Blog</Nav.Link>

                        }

                        {
                            currentUser && <Nav.Link href="/read-blog">Read Blogs</Nav.Link>
                        }
                                        
                                        
                                      
                          
                          
                        
                        {
                          currentUser && <Nav.Link onClick={handlelogout}>Logout</Nav.Link>
                        }

                       {
                          currentUser && <Nav.Link href="/create-post">Create Post</Nav.Link>
                        }

                        {
                          currentUser && <Nav.Link href="/read-post">Read Post</Nav.Link>
                        }
                        {
                          currentUser && <Nav.Link href="/task-traking">Task Tracking</Nav.Link>
                        }

                        {
                          currentUser && <Nav.Link href='/reset-profile'>Reset-Profile</Nav.Link>
                        }

                        {
                          currentUser && <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                        }
                        {
                          currentUser && <Nav.Link href="https://youngistaanfoundation.org/contact/">Contact</Nav.Link>
                        }

                        

                    </Nav>  
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
