import React from 'react';


class Nav extends React.Component{
    constructor(){
        super()
        this.state = {
            clicked: false
        }
    }

    SUhandleClick(){
        alert("Sign up")
    }

    SIhandleClick(){
        alert("Sign in")
    }

    render() {

        return(
        <div id='header'>
            <img id="logo" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCCmV4hdR0WwQdDksdPtHdYPSGo27bnOl0dA&amp;usqp=CAU' alt = "logo"></img>
            <br></br>
            
            <a href='#' onClick = {this.SIhandleClick}>
                Sign In 
            </a>
            <br></br>

            <a href='#' onClick = {this.SUhandleClick}>
                Sign Up 
            </a>

        </div>

        )
    }
}

export default Nav