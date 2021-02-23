import React from 'react'
import FirstNameUserInfo from './FirstNameUserInfo';
import LastNameUserInfo from './LastNameUserInfo';
import PasswordUserInfo from './PasswordUserInfo';
import LISbutton from '../LISbutton';

class UserInformation extends React.Component {

    render(){

        return (
            <div id='userInfoDisp'>
                <h1>User Information </h1>
                <p id ='USins'>Double click to edit</p>
                <FirstNameUserInfo />
                <LastNameUserInfo />
                <PasswordUserInfo />
                <div>
                {/* <button 
                    type="button" 
                    class="btn btn-danger"
                >
                Delete your account
                </button> */}

                </div>

            </div>
        )
                
        
    }
}

export default UserInformation 

