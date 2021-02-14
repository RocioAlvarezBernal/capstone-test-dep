import React from 'react'; 
import {Link} from 'react-router-dom';
// import moduleName from '../../public/T9Logo.png';
class NavigationBar extends React.Component{
    onclick(){
        alert("You are about to log out")
        window.location = "/";
    } 

    render(){    
          
        return(
            <nav id= "NavBar">
                
                {/* <img src={process.env.PUBLIC_URL + "/T9Logo.png"} alt='T9_logo' id='logoImg'/> */}
                
                 <ul class="nav justify-content-end">
                
                 <Link to='/Home'><li class="nav-item"><a class="nav-link"> Home </a></li></Link>

                 <Link to='/Settings'><li class="nav-item"><a class="nav-link">User Settings</a></li></Link>

                <li class="nav-item" onClick={this.onclick}> <a class="nav-link">Logout</a> </li> 
                    
                </ul>


            </nav>
        )
    }
}

export default NavigationBar