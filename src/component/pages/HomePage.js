import React from 'react'
import AccountOverview from '../UserHome/AccountOverview'
import TransactionSection from '../UserHome/TransactionSection'
class HomePage extends React.Component {
    render(){
        return(
            <div id='HPwrapper'>
            <main id='HomePage' >
                <AccountOverview />
                <TransactionSection />
            </main>

            </div>
        )
    }
}

export default HomePage  