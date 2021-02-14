import React from 'react'
import AccountOverview from '../UserHome/AccountOverview'
import TransactionSection from '../UserHome/TransactionSection'
import NavigationBar from '../Navbar/NavigationBar'
import AccountBalances from '../UserHome/AccountBalances'
class HomePage extends React.Component {
    render(){
        return(
            <div className='pages'>
                <nav><NavigationBar/></nav>
                <br></br>
                <AccountBalances />
            <main id='HomePage' >
            
                <AccountOverview />
                <TransactionSection />
            </main>

            </div>
        )
    }
}

export default HomePage  