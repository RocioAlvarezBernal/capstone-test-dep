import React from 'react'
import LISbutton from '../LISbutton'
import CreateAccountOpt from './CreateAccountOpt'
import DeleteABankAccount from './DeleteABankAccount';
class AccountManagement extends React.Component {
    render(){
        return(
            <div>
                <div id='accMngmt'>
                    {/* <input id='btn' type="submit" value='Create an Account'></input> */}
                    {/* <LISbutton 
                        text ={'Create A Bank Account'}
                        disabled={false}
                        onClick ={ console.log('clicked') }
                    /> */}
                    {/* <input type="submit" value='Delete an Account'></input> */}
                    {/* <LISbutton 
                        text ={'Delete A Bank Account'}
                        disabled={false}
                        // onClick ={ console.log('clicked') }
                    /> */}


                    <CreateAccountOpt />
                    <DeleteABankAccount/>
                </div>

                

            </div>
        )
    }
}

export default AccountManagement 

