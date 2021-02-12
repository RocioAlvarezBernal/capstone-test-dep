import React from 'react'; 

class TransactionCard extends React.Component {
    // constructor(){
    //     super()
    //     this.state= {
    //         DorW: " test ",
    //         tranType:" test ",
    //         Amount: " test "
    //     }
    // }
//false = deposit 
//true= withdraw

    render(){
        // let DepositorWithdraw = this.state.tranType;
        return(
            <div>
             <div class='transaction'>
                    <li>
                     {this.props.DorW}
                    <br></br>
                     {this.props.tranType}
                    -
                     {this.props.Amount}
                    <br></br>
                    {this.props.date}
                    </li>
                </div>
            </div>

        )
    }
}

export default TransactionCard;