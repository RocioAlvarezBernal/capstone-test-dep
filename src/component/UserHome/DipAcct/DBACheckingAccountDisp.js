import React from 'react'
import JWT from '../../JWT'
import URL from '../../URL';

class DBACheckingAccountDisp extends React.Component {
        constructor(){
            super()
            this.state={
                id:0,
                balance: 0,
                openedOn: null,
                // interestRate:null
            }
        }
         showCA(){
            let testToken= `Bearer ${ JWT.jwt}`

            fetch (`${URL.url}/Me/DBACheckingAccount`, {
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
                    const bankAcctCard = 
                    data.map(data => {
                        return`<div id='accountTable'><p>Account Id: ${data.id}</p>
                                <p>Balance: ${data.balance}</p>
                                <p>Date opened on:  ${data.openedOn}</p>
                                </div>
                            ` 
                    })
                    console.log(bankAcctCard)
    
                    document.querySelector('#DBAAccount').insertAdjacentHTML('afterbegin', bankAcctCard )
            })
            .catch((error) => {
                console.log(error);
            }
            );
        }
    
    componentDidMount(){
        this.showCA();
    }
    
        render(){
            return(
            <div id="DBAAccount">

            </div>
            )
        }
    }
    
    export default DBACheckingAccountDisp 
    