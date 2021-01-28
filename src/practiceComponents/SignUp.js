import React from 'react';

class SignUp extends React.Component{
    
    constructor(){
        super()
        this.state={
            clicked: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState( 
            {clicked : !this.state.clicked}
        )
        alert(this.state.clicked)
    }

    render(){
        return(
            <form id='signInForm'>
                <input type="text" placeholder="First Name"></input>           
                <input type="text" placeholder="Last Name"></input>
                <input type="text" placeholder="Password"></input>           
                <input onClick= {this.handleClick} type="button" value="Sign Up"></input>
            </form>
        )
    }
}

export default SignUp