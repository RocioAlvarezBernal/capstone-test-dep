import React from 'react';

class SignIn extends React.Component{
    render(){
        return(
            <div id='signInForm'>
                <input type="text" placeholder="Username"></input>
                <input type="text" placeholder="Password"></input>           
                <input type="button" value="Sign In"></input>
            </div>
        )
    }
}

export default SignIn