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
                <img src={process.env.PUBLIC_URL + "/T9Logo.png"} alt='T9_logo' id='logoImg'/>

                <ul>
                    <Link to='/Home'><li>Home</li></Link>
                    <Link to='/Settings'><li>User Settings</li></Link>
                    {/* <Link to='/'><li>Logout</li></Link> */}
                    <li onClick={this.onclick}> Logout</li>
                </ul>
            </nav>
        )
    }
}

export default NavigationBar