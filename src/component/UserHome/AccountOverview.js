import React from 'react'
import {Link} from 'react-router-dom';
import SavingsAccountDisp from './DipAcct/SavingsAccountDisp';
import CheckingAccountDisp from './DipAcct/CheckingAccountDisp';
import CDAccountsDisp from './DipAcct/CDAccountsDisp';
import DBACheckingAccountDisp from './DipAcct/DBACheckingAccountDisp';
import RolloverIRADisp from './DipAcct/RolloverIRADisp';
import RothIRADisp from './DipAcct/RothIRADisp';
import RegularIRADisp from'./DipAcct/RegularIRADisp';


class AccountOverview extends React.Component {

    render(){

        return(

            <div className="container">
                <div>
                    
                    <div className="accountTable">
                        <div>
                            <h1>Savings Account</h1>
                            <SavingsAccountDisp/>
                        </div>
                        
                        <div>
                            <h1>Checking Account</h1>
                            <CheckingAccountDisp/>
                        </div>
                        
                        <div>
                            <h1>DBA - Checking Account</h1>
                            <DBACheckingAccountDisp />
                        </div>

                        <div>
                            <h1>CD Accounts</h1>
                            <CDAccountsDisp />
                        </div>

                        <div>
                            <h1>IRA Accounts</h1>
                            <h4>Rollover IRA</h4>
                            <RolloverIRADisp />
                            <h4>Roth IRA</h4>
                            <RothIRADisp />
                            <h4>Regular IRA</h4>
                            <RegularIRADisp />
                        </div>
                    </div>
                    
                    <Link to='/Settings'>
                        <p id="ahlink">
                            click here to visit your user settings to manage your accounts
                        </p>
                    </Link>
                </div>
            </div>
        )
    }
}

export default AccountOverview 

