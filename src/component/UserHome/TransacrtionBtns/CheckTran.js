import React from 'react'
import InputField from '../../InputField'
import LISbutton from "../../LISbutton"
import JWT from "../../JWT"

class CheckTran extends React.Component {
    constructor(){
        super()
        this.state={
            id:0,
            amount: 0,
            date: null,
            isClicked: false
        }
        this.onClicked=this.onClicked.bind(this);
    }

    onClicked() {
        this.setState(
            {
                isClciked: !this.state.isClciked
            }
        )
        console.log(this.state.isClciked)
    }
    
     showTran(){
        let testToken= `Bearer ${JWT.jwt}`

        fetch ('http://localhost:8080/api/Me/CheckingAccount', {
            headers: 
                {
                    'Authorization': testToken
                },
            })

        .then(response=>{
            if (!response.ok){
                throw Error ("RESPONSE NOT OKAY");
            }
            return response.json();
        })
        .then(data=>{
                console.log(data.checkingtransactions[0].id)
                console.log(data.targetAccountTransactions)
                const transactionCard = 
                data.checkingtransactions.map(data => {
                    return `<div className="transaction" >
                        <p>${data.type}</p>
                        <p>Id: ${data.id}</p>
                        <p>Amount: $ ${data.amount}</p>
                        <p>Date of Transactoon: ${data.transactionDate}</p></di>
                    ` 
                })
                console.log(transactionCard)

                document.querySelector('#checking').insertAdjacentHTML('afterbegin', transactionCard )
        })
        
        .catch((error) => {
            console.log(error);
        }
        );
    }

    clickedView(){
        return(
        <div className = "container">
            <div id="checking">
                        
            </div>
            <button
                className='btn'
                onClick={this.onClicked}>
            X
            </button>

           </div>   
        )  
    }

    defaultView() {
        return(
            <div className = "container">
                <button className= 'btn' onClick={() => {
                    this.onClicked();
                    this.showTran();
                    }}> 
                Checking Transactions
                </button>
            </div>
        )
    }
  
    render() {
        return this.state.isClciked ? this.clickedView() : this.defaultView()
    }
}
export default CheckTran;