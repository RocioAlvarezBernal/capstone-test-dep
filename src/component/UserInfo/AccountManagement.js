import React from 'react'
import LISbutton from '../LISbutton'
import CreateAccountOpt from './CreateAccountOpt'
import DeleteABankAccount from './DeleteABankAccount';
class AccountManagement extends React.Component {
    render(){
        return(
            <div>
                <div id='accMngmt'>
                    <hr className="new5"></hr>
                    <CreateAccountOpt />
                    <hr className="new5"></hr>
                    <DeleteABankAccount/>
                    <hr className="new5"></hr>
                </div>
           </div>
        )
    }
}

export default AccountManagement 

