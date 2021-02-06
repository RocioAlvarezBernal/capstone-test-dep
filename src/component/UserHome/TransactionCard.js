import React from 'react'; 

class TransactionCard extends React.Component {
    constructor(){
        super()
        this.state= {
            DorW= " ",
            tranType:" ",
            Amount: " "
        }
    }
//false = deposit 
//true= withdraw

    render(){
        let DepositorWithdraw = this.state.tranType;
        return(
            <div>
             <div class='transaction'>
                    <p >
                    {DepositorWithdraw}
                    <br></br>
                    Transaction Type - $0.00 
                    <br></br>
                    0/0/0 00:00:00
                    </p>
                </div>
            </div>

        )
    }
}

export default TransactionCard;