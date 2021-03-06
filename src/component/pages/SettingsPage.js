import React from 'react'
// import NavigationBar from '../NavigationBar'
import AccountManagement from '../UserInfo/AccountManagement'
import UserInformation from '../UserInfo/UserInformation'
import NavigationBar from '../Navbar/NavigationBar';

class SettingsPage extends React.Component {
    render(){
        return(
            <div className='pages'>
                <nav> <NavigationBar/></nav>
            <main id='SettingsPage' >
                <UserInformation />
                <AccountManagement />
                
            </main>
            </div>
        )
    }
}

export default SettingsPage  