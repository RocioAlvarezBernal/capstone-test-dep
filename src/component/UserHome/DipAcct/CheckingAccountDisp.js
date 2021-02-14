import React from 'react'
import {Link} from 'react-router-dom';
import JWT from '../../JWT'
class CheckingAccountDisp extends React.Component {
    constructor(){
        super()
        this.state={
            id:0,
            balance: 0,
            openedOn: null,
            interestRate:null
        }
    }
     showCA(){
        let testToken= `Bearer ${ JWT.jwt}`

        fetch (`${URL.url}/Me/CheckingAccount`, {
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

                // const bankAcctCard = 
                // allData.map(data => {
                //     return `<p>id ${data.id}</p>` 
                // })
                
                // console.log(bankAcctCard)

                // document.querySelector('#checking').insertAdjacentHTML('afterbegin', "<p>hello</p>")
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
                    <h4>CheckingAccount</h4>
                    <p>Account Id: {id}</p>
                    <p>Balance: {balance}</p>
                    <p>Date opened on: {opednedOn}</p>
                    <p>interestRate: {interestRate}</p>
                    
                
               
                </div>
            </div>
        )
    }
}

export default CheckingAccountDisp 

