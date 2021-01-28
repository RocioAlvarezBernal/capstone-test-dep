import React from 'react'

class TransactionSection extends React.Component {
    render(){
        return(
            <div id='transactionWrapper'>

            <form id='Tbutton'>
                <input type="button" value="Make a Transaction">
                </input>
            </form>


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
        )
    }
}

export default TransactionSection 

