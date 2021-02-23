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
             <div id="accountOverview" className="list-group">  
                    
                    <div className="accountTable">
                        <div>
                            <h1>Savings Account</h1>
                            <SavingsAccountDisp/>
                        </div>
                        <hr className="new5"></hr>
                        <div>
                            <h1>Checking Account</h1>
                            <CheckingAccountDisp/>
                        </div>
                        <hr className="new5"></hr>

                        <div>
                            <h1>DBA - Checking Account</h1>
                            <DBACheckingAccountDisp />
                        </div>
                        <hr className="new5"></hr>

                        <div>
                            <h1>CD Accounts</h1>
                            <CDAccountsDisp />
                        </div>
                        <hr className="new5"></hr>

                        <div>
                            <h1>IRA Accounts</h1>
                            <h4>Rollover IRA</h4>
                            <RolloverIRADisp />
                            <hr class="new1"></hr>

                            <h4>Roth IRA</h4>
                            <RothIRADisp />
                            <hr class="new1"></hr>

                            <h4>Regular IRA</h4>
                            <RegularIRADisp />
                            <hr class="new1"></hr>

                        </div>
                    </div>
                    
                    <Link to='/Settings'>
                        <p id="ahlink">
                            click here to visit your user settings to manage your accounts
                        </p>
                    </Link>

                    </div>
        )
    }
}

export default AccountOverview 

