import React from 'react'
import NavigationBar from '../Navbar/NavigationBar'
import {Link} from 'react-router-dom';

class aboutUs extends React.Component{
    
    render(){
        return(
            <div className='pages'>
                <nav><NavigationBar/></nav>
                <br></br>
                <main id='AboutPage' >
                    <div id= "aboutusNav">
                        <ul>
                        <Link to='#'><li class="nav-item"><a class="nav-link"> Rocio </a></li></Link>
                        <Link to='#'><li class="nav-item"><a class="nav-link">Benjamin</a></li></Link>
                        <Link to='#'><li class="nav-item"><a class="nav-link">Bradley</a></li></Link>
                        </ul>
                    </div>

                    <div className="amtopics">
                        <h3>Frontend Development</h3>
                        <img src={process.env.PUBLIC_URL + "/RocioImg.jpg"} alt='Rocio-frontend' id='Rocio'/>
                            <div> 
                                        <div>
                                            <h3>Planning</h3> 
                                            <img src={process.env.PUBLIC_URL + "/wireframecapproj.png"} alt='wireframe' id='wireframe'/>
                                                <p>
                                                Having a concrete understanding of what I was building was essential in this project. The provided capstone documentation helped form a clear goal to what the end result should be.
                                                </p>
                                        </div>
                                
                                        <div>
                                            <h3>Process</h3>
                                                <p>
                                                While developing this application a lot of testing was necessary. This leads me to develop a document with basic testing processes ie endpoints and their bodies. 
                                                <a href="https://docs.google.com/document/d/1q4Ax3A9C-mDZSckGY2plWAWH0QjvmTqVJTR2OMEIgaM/edit"> visit document here</a> 
                                                </p>
                                        </div>
                                        
                                        <div>
                                            <h3>Reflections</h3>
                                            <p>
                                            At the start of this project I had a personal vadeta against react, but now after working on it for weeks I've come to the realization it is not so bad. developing the frontend for this project not only got me familiar with react but also with JPA and MySQL as a lot of testing and interaction with the backend code was necisary. Some new implemtations I'd like to explore would be to be to provide better user experience both with functionality and design.
                                            </p>

                                        </div>
                                
                                </div>
                        </div>

                </main>
            </div>
        )
    }
}

export default aboutUs 


