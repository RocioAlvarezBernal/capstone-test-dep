import React from 'react'
// import NavigationBar from '../NavigationBar'
import AccountManagement from '../AccountManagement'
import UserInformation from '../UserInformation'

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

export default SettingsPage  