import React from 'react'
import JWT from "../../JWT"
import moment from 'moment';
import URL from '../../URL';

class SavTran extends React.Component {
    constructor(){
        super()
        this.state={
            id:0,
            amount: 0,
            dateOpened: null,
            isClicked: false
        }
    }
    
     showTran(){
        let testToken= `Bearer ${JWT.jwt}`

        fetch (`${URL.url}/Me/Transactions`, {
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
                console.log(data)
                // let date = moment(dateOpened).format('MM/DD/YYYY');
                const transactionCard = data.map(data => {
                    return`<div id="transactioncss">
                        <h4>${data.type}</h4>
                        <p>Transaction Id: ${data.id}</p>
                        <p>Amount: $ ${data.amount}</p>
                        <p>Date of Transaction: ${data.transactionDate}</p>
                        <p>Account type: ${data.location}</p>
                        <p>Transaction type: ${data.type}</p>
                        <p>Origin Account: ${data.originAccountID}</p></div>
                    ` 
                })
                document.querySelector('#saving').insertAdjacentHTML('afterbegin', transactionCard )
        })
        .catch((error) => {
            console.log(error);
        }
        );
    }

    componentDidMount(){
        this.showTran();
    }

    render(){        
        return( 
        // <div className = "center">
            <div id="saving">
                                
         </div>
        //  </div>
         )
    }
}

    //
    
    /* clickedView(){ */
//         return(
//         <div className = "container">
//             <div id="saving">
                        
//             </div>
//             <button
//                 className='btn'
//                 onClick={this.onClicked}>
//             X
//             </button>

//            </div>   
//         )  
//     }

//     defaultView() {
//         return(
//             <div className = "container">
//                 <button className= 'btn' onClick={() => {
//                     this.onClicked();
//                     this.showTran();
//                     }}> 
//                 Savings Transactions
//                 </button>
//             </div>
//         )
//     }
  
//     render() {
//         return this.state.isClciked ? this.clickedView() : this.defaultView()
//     }
// }
export default SavTran;