import React from 'react'
import InputField from "../InputField";
import LISbutton from "../LISbutton";
import UserStore from "./UserStore";

class SIForm extends React.Component {
constructor(props){
    super(props);
    this.state={
        username:'',
        password:'',
        buttonDisables: false
    }
}

setInputValue(property, val){
    val =val.trim();
    if (val.length > 8){
        return;
    }
    this.setState({
        [property]:val
    })
}

resetForm(){
    this.setState({
        username:'',
        password: '',
        buttonDisables: false
    })
}

async doLogin(){
    if (!this.state.username){
        return;
    }
    if(!this.state.password){
        return;
    }
    this.setState({
        buttonDisables: true
    })

    try{
        let res =await fetch ('http://localhost:8080/authenticate', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // stringify json will pass username and password from state which was entered by user to the api using enpoints 
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        });
        let result = await res.json();
        // if loginform is success set login to true 
        if(result&& result.success){
          UserStore.isLoggedIn= true;
          UserStore.username= result.username;  
        }
        //else reset form 
        else if (result&&result.success === false){
            this.resetForm();
            alert(result.msg);
        }
    }
    // incase error console log error and reset form 
    catch(e){
        console.log(e);
        this.resetForm();
    }
}

    render(){
        return(
            <div className='signInForm'>
                Log In
                <InputField
                 type="text" 
                 placeholder="Username"
                 value = { this.state.username ? this.state.username: ''}
                 onChange = { (val) => this.setInputValue('username' , val)}
                 />   

                <InputField
                 type="password" 
                 placeholder="Password"
                 value = { this.state.password ? this.state.password : ''}
                 onChange = { (val) => this.setInputValue('password' , val)}
                 />   

                <LISbutton 
                    text= 'Sign in'
                    disabled={this.state.buttonDisables}
                    onClick ={ () => this.doLogin()}
                    className='lisb'
                />
            </div>
        )
    }
}

export default SIForm 