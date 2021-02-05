import React from 'react'
// import NavigationBar from '../NavigationBar'
import AccountManagement from '../UserInfo/AccountManagement'
import UserInformation from '../UserInfo/UserInformation'

class SettingsPage extends React.Component {
    render(){
        return(
            <div className = 'container'>
            <main id='SettingsPageMain' >
                <UserInformation />
                <AccountManagement />
                
            </main>
            </div>
        )
    }
}


// render(){
//     return(
//         <div className='signInForm'>
//             Log In
//             <InputField
//              type="text" 
//              placeholder="Username"
//              value = { this.state.username ? this.state.username: ''}
//              onChange = { (val) => this.setInputValue('username' , val)}
//              />   

//             <InputField
//              type="password" 
//              placeholder="Password"
//              value = { this.state.password ? this.state.password : ''}
//              onChange = { (val) => this.setInputValue('password' , val)}
//              />   

//             <LISbutton 
//                 text= 'Sign in'
//                 disabled={this.state.buttonDisables}
//                 onClick ={ () => this.doLogin()}
//                 className='lisb'
//             />
//         </div>
//     )
// }

export default SettingsPage  