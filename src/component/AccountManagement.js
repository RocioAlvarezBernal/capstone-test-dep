import React from 'react'
import LISbutton from './LISbutton'

class AccountManagement extends React.Component {
    render(){
        return(
            <div>
                <form id='accMngmt'>
                    {/* <input id='btn' type="submit" value='Create an Account'></input> */}
                    <LISbutton 
                        text ={'Create A Bank Account'}
                        disabled={false}
                        onClick ={ console.log('clicked') }
                    />
                    {/* <input type="submit" value='Delete an Account'></input> */}
                    <LISbutton 
                        text ={'Delete A Bank Account'}
                        disabled={false}
                        onClick ={ console.log('clicked') }
                    />

                </form>
            </div>
        )
    }
}

export default AccountManagement 

