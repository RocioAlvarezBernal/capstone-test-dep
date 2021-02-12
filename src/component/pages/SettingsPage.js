import React from 'react'
// import NavigationBar from '../NavigationBar'
import AccountManagement from '../UserInfo/AccountManagement'
import UserInformation from '../UserInfo/UserInformation'
import NavigationBar from '../Navbar/NavigationBar';

class SettingsPage extends React.Component {
    render(){
        return(
            <div className = 'HPwrapper'>
                <nav> <NavigationBar/></nav>
            <main id='SettingsPageMain' >
                <UserInformation />
                <AccountManagement />
                
            </main>
            </div>
        )
    }
}

export default SettingsPage  