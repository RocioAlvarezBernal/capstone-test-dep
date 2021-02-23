import React from 'react'
import {Link} from 'react-router-dom';
import JWT from '../../JWT';
import URL from '../../URL';


class SavingsAccountDisp extends React.Component {
    constructor(){
        super()
        this.state={
            id:0,
            balance: 0,
            openedOn: null,
            interestRate:null
        }
    }
     showSA(){
        let testToken= `Bearer ${ JWT.jwt}`
        console.log( localStorage.JWTtest);

        fetch (`${URL.url}/Me/SavingsAccounts`, {
            headers: 
                {
                    'Authorization': testToken
                }
            })

        .then(response=>{
            if (!response.ok){
                throw Error ("RESPONSE NOT OKAY");
            }
            return response.json();
        })
        .then(data=>{
                console.log(data)
                this.setState(
                    {
                        id: data.id,
                        balance: data.balance,
                        openedOn: data.openedOn,
                        interestRate: data.interestRate
                    }
                )
        })
        .catch((error) => {
            console.log(error);
        }
        );
    }

componentDidMount(){
    this.showSA();

}
    render(){
        const id = 
            this.state.id; 
        
        const balance = 
            this.state.balance;
        
        const opednedOn = 
            this.state.openedOn;
        

        const interestRate= 
            this.state.interestRate;

        return(

            <div >
                <div id='accountTable'>
                    <p>Account Id: {id}</p>
                    <p>Balance: {balance}</p>
                    <p>Date opened on: {opednedOn}</p>
                    <p>interestRate: {interestRate}</p>
                </div>
            </div>
        )
    }
}

export default SavingsAccountDisp 

