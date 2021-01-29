import React from 'react'; 
import {Link} from 'react-router-dom';
// import logo from '../images/T9Logo.png';



class NavigationBar extends React.Component{
    render(){
        return(
            <nav id= "NavBar">
                <img src='/src/images/T9Logo.png' alt='logo' id='logoImg'></img>
                <ul>
                    <Link to='/Home'><li>Home</li></Link>
                    <Link to='/Settings'><li>User Settings</li></Link>
                    <Link to='/'><li>Logout</li></Link>
                </ul>
            </nav>
        )
    }
}

export default NavigationBar