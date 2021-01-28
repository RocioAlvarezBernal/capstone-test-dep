import React from 'react'
import NavigationBar from '../NavigationBar'
import AccountOverview from '../AccountOverview'
import TransactionSection from '../TransactionSection'

class HomePage extends React.Component {
    render(){
        return(
            <div id='HPwrapper'>

            {/* <header>
                <NavigationBar />
            </header> */}

            <main id='HomePage' >
                <AccountOverview />
                <TransactionSection />
            </main>

            </div>
        )
    }
}

export default HomePage  