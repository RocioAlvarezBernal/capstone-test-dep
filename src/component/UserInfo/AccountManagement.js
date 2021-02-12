import React from 'react'
import LISbutton from '../LISbutton'
import CreateAccountOpt from './CreateAccountOpt'
import DeleteABankAccount from './DeleteABankAccount';
class AccountManagement extends React.Component {
    render(){
        return(
            <div>
                <div id='accMngmt'>
                    <CreateAccountOpt />
                    <DeleteABankAccount/>
                </div>
           </div>
        )
    }
}

export default AccountManagement 

