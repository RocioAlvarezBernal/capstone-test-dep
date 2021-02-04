import React from 'react'
// import SUForm from '../SUForm'
import SIForm from '../SignIn/SIForm'
import UserStore from '../SignIn/UserStore'
import LISbutton from "../LISbutton";
import { observer } from 'mobx-react';

class LandingPage extends React.Component {

    async componentDidMount(){
        try{
            let res = await fetch('/isLoggedIn',{
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Contest-Type': 'application/json'
            }
        });

        let result =await res.json();
        if (result && result.sucess){
            UserStore.loading = false; 
            UserStore.isLoggedIn =true;
            UserStore.username = result.username;

        }

        else{
            UserStore.loading = false; 
            UserStore.isLoggedIn =false;
        }
    }
    catch(e){
        UserStore.loading = false; 
        UserStore.isLoggedIn =false;
    }
}

async doLogout(){
    try{
        let res = await fetch('/logout',{
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Contest-Type': 'application/json'
        }
        });

        let result =await res.json();
        if (result && result.sucess){
            UserStore.isLoggedIn =false;
            UserStore.username= '';

        }
    }
    catch(e){
        console.log(e)
    }
}

    render(){
        if (UserStore.loading){
            return( 
                <div>
                    <div className='container'>
                        loading...
                    </div>
                </div>
            );
        }
        else{
            
            if(UserStore.isLoggedIn){
                return( 
                    <div>
                        <div className='container'>
                            welcome {UserStore.username}
                            <LISbutton 
                                text ={'LOG OUT'}
                                disabled={false}
                                onClick ={ () => this.doLogout()}
                            />

                        </div>
                    </div>
                );
        }


        return(
            <div>
                <div className = 'container'>
                    {/* <LISbutton 
                            text={"LOGOUT"}
                            disabled={false}
                            onClick ={ () => this.doLogout()}
                        /> */}
                        <SIForm />
                </div >
            </div>

        );
        }
    }

}

export default observer(LandingPage); 