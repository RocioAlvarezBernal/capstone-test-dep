import React from 'react'
import InputField from '../InputField'
import LISbutton from "../LISbutton"
import JWT from "../JWT"
import CheckTran from './TransacrtionBtns/CheckTran'
import SavTran from './TransacrtionBtns/SavTran'
import DBATran from './TransacrtionBtns/DBATran'
import CDTran from './TransacrtionBtns/CDTran'
import RegTran from './TransacrtionBtns/RegTran'
import RothTran from './TransacrtionBtns/RothTran'
import RollTran from './TransacrtionBtns/RollTran'
import MakeTranBtn from './MakeTranBtn'

class TransactionSection extends React.Component {
    constructor(){
        super()
        this.state={
            id:0,
            amount: 0,
            date: null,
            isClicked: false
        }
        // this.onClicked=this.onClicked.bind(this);
    }

    // onClicked() {
    //     this.setState(
    //         {
    //             isClciked: !this.state.isClciked
    //         }
    //     )
    //     console.log(this.state.isClciked)
    // }
    
    //  showTran(){
    //     let testToken= `Bearer ${JWT.jwt}`

    //     fetch ('http://localhost:8080/api/Me/CheckingAccount', {
    //         headers: 
    //             {
    //                 'Authorization': testToken
    //             },
    //         })

    //     .then(response=>{
    //         if (!response.ok){
    //             throw Error ("RESPONSE NOT OKAY");
    //         }
    //         return response.json();
    //     })
    //     .then(data=>{
    //             console.log(data.checkingtransactions[0].id)
    //             const transactionCard = 
    //             data.checkingtransactions.map(data => {
    //                 return `<div className="transaction" >
    //                     <p>${data.type}</p>
    //                     <p>Id: ${data.id}</p>
    //                     <p>Amount: $ ${data.amount}</p>
    //                     <p>Date of Transactoon:  ${data.transactionDate}</p></di>
    //                 ` 
    //             })
    //             console.log(transactionCard)

    //             document.querySelector('#checking').insertAdjacentHTML('afterbegin', transactionCard )
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     }
    //     );
    // }

    // clickedView(){
    //     return(
    //     <div className = "container">
    //         <div id="checking">
                        
    //         </div>
    //         <button
    //             className='btn'
    //             onClick={this.onClicked}>
    //         X
    //         </button>

    //        </div>   
    //     )  
    // }

    // defaultView() {
    //     return(
    //         <div className = "container">
    //             <button className= 'btn' onClick={() => {
    //                 this.onClicked();
    //                 this.showTran();
    //                 }}> 
    //             Checking Transactions
    //             </button>
    //         </div>
    //     )
    // }
  
    render() {
        return(
            <div>
                    
                <div>
                    <SavTran />
                    <CheckTran/>
                    <DBATran />
                    <CDTran />
                    <RollTran />
                    <RothTran />
                    <RegTran />
                </div>

                <MakeTranBtn />
            </div>

            /* // <div className = "container">
               
                // <div id='transactionWrapper'> 
                /* <InputField 
                    type="text"
                    placeholder="Amount"
                    value = ""
                    onClick= {console.log("clicked")}
                />
                <InputField 
                    type="text"
                    placeholder="Deposit to:"
                    value = ""
                    onClick= {console.log("clicked")}
                />

                <button
                    className = "btn"
                    onClick={console.log("clicked")}
                 >Deposit
                 </button>

                 <button
                    className = "btn"
                    onClick={console.log("clicked")}
                 >SUBMIT
                 </button>

                 <button
                    className = "btn"
                    text= 'Submit'                 
                    onClick={console.log("clicked")}
                 >SUBMIT
                 </button> */

    

            // </div> 

        //     </div>

        )
    }
}

export default TransactionSection