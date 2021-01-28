import React from 'react'

class SIForm extends React.Component {
    render(){
        return(
            <form class='signInForm'>
                <input type="text" placeholder="Username"></input>           
                <input type="text" placeholder="Password"></input>           
                <input type="button" value="Sign Up"></input>
            </form>
        )
    }
}

export default SIForm 
