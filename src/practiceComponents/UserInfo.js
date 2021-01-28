import React from 'react';
import SignUp from './SignUp'

class UserInfo extends React.Component{

constructor(){
    super()
    this.state = {
        id: 0,
        firstName: " ",
        lastName: " ",
        Password: " "
    }
}

     UserInfo = [
        {
        id: 1,
        firstName: "Name1",
        lastName: "Name2",
        Password: "password"
        }
        // ,
    
        // {
        // id: 2,
        // firstName: "Name3",
        // lastName: "Name4",
        // Password: "password1"
        // },

        // {
        // id: 3,
        // firstName: "Name5",
        // lastName: "Name6",
        // Password: "password2"
        // }


    ]

    // handleChange(){
    //     this.setState(
            
    //     )
    // }

    render(){
    // const info = this.state.map( 
        <SignUp 
        key={UserInfo.id} 
        SignUp={UserInfo} 
        handleChange={this.handleChange}
    />
    // )

        return(
           <form>
                <input type="text" value= {this.UserInfo.firstName}></input>           
                <input type="text" value= {this.UserInfo.lastName}></input>
                <input type="text"  value= {this.UserInfo.Password}></input> 
           </form> 
        )
    }
}

export default UserInfo