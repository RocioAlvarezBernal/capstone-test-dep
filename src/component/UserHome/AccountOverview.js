import React from 'react'
import {Link} from 'react-router-dom';

class AccountOverview extends React.Component {
    render(){
        return(
            <div className="container">
               
            <table id='accountTable'>
{/* Savings */}
                <tr><th>Savings</th></tr>
                <tr><td>AccountId</td></tr>
{/* Checkings */}
                <tr><th>Checkings</th></tr>
                <tr><td>AccountId</td></tr>
                <tr><td>AccountId</td></tr>
{/* CD */}
                <tr><th>Certifcate of Deposit</th></tr>
                <tr><td>AccountId</td></tr>
{/* IRA */} 
                <tr><th>IRA</th></tr>
                <tr><th>Rollover IRA</th></tr>
                <tr><td>AccountId</td></tr>
                <tr><th>Roth IRA</th></tr>
                <tr><td>AccountId</td></tr>
                <tr><th>Regular IRA</th></tr>
                <tr><td>AccountId</td></tr>  

                 {/* <input type='button' value='Manage Accounts'></input> */}
                 <Link to='/Settings'>
                    <p id="ahlink">
                        click here to visit your user settings to manage your accounts
                    </p>
                 </Link>
                
            </table>

            </div>
        )
    }
}

export default AccountOverview 

