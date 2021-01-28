import React from 'react'

class AccountManagement extends React.Component {
    render(){
        return(
            <div>
                <form id='accMngmt'>
                    <input type="submit" value='Create an Account'></input>
                    <input type="submit" value='Delete an Account'></input>
                </form>
            </div>
        )
    }
}

export default AccountManagement 

