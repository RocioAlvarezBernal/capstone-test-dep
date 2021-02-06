import React from 'react'
import MakeTranBtn from './MakeTranBtn'


class TransactionSection extends React.Component {
    render(){
        return(
            <div className = "container">
              
                <div id='transactionWrapper'>
                
                <MakeTranBtn />

                    <div id='listOfTransactions'>
                    <div class='transaction'>
                        <p>
                        Deposit/Withdraw
                        <br></br>
                        Transaction Type - $0.00 
                        <br></br>
                        0/0/0 00:00:00
                        </p>
                    </div>

                    <div class='transaction'>
                        <p>
                        Deposit/Withdraw
                        <br></br>
                        Transaction Type - $0.00 
                        <br></br>
                        0/0/0 00:00:00
                        </p>
                    </div>

                    <div class='transaction'>
                        <p>
                        Deposit/Withdraw
                        <br></br>
                        Transaction Type - $0.00 
                        <br></br>
                        0/0/0 00:00:00
                        </p>
                    </div>

                    <div class='transaction'>
                        <p>
                        Deposit/Withdraw
                        <br></br>
                        Transaction Type - $0.00 
                        <br></br>
                        0/0/0 00:00:00
                        </p>
                    </div>

                    <div class='transaction'>
                        <p>
                        Deposit/Withdraw
                        <br></br>
                        Transaction Type - $0.00 
                        <br></br>
                        0/0/0 00:00:00
                        </p>
                    </div>
                </div>

            </div>
            </div>
        )
    }
}

export default TransactionSection 

