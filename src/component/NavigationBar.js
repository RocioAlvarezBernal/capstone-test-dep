import React from 'react'; 
import {Link} from 'react-router-dom';

class NavigationBar extends React.Component{
    render(){
        return(
            <nav id= "NavBar">
                <img src='https://livejones.com/wp-content/uploads/2020/05/logo-Placeholder.png' alt='logo' id='logoImg'></img>
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