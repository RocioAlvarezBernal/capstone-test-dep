import React from 'react'

class SUForm extends React.Component {
    render(){
        return(
            <form class='signInForm'>
                <input type="text" placeholder="First Name"></input>           
                <input type="text" placeholder="Last Name"></input>
                <input type="text" placeholder="Password"></input>           
                <input type="button" value="Sign Up"></input>
            </form>
        )
    }
}

export default SUForm 
