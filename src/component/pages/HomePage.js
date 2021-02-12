import React from 'react'
import AccountOverview from '../UserHome/AccountOverview'
import TransactionSection from '../UserHome/TransactionSection'
import NavigationBar from '../Navbar/NavigationBar'
class HomePage extends React.Component {
    render(){
        return(
            <div id='HPwrapper'>
                <nav><NavigationBar/></nav>
            <main id='HomePage' >
                <AccountOverview />
                <TransactionSection />
            </main>

            </div>
        )
    }
}

export default HomePage  