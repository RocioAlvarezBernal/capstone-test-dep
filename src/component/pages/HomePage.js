import React from 'react'
// import NavigationBar from '../NavigationBar'
import AccountOverview from '../UserHome/AccountOverview'
import TransactionSection from '../UserHome/TransactionSection'

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