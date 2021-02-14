import React from 'react'
import JWT from '../JWT';
import URL from '../URL'
class AccountBalances extends React.Component{
    
    constructor(){
        super()
        this.state=
        {
            isClicked:true,
            usersName:"",
            savingsBalance: "",
            checkingBalance: "",
            overallBalances: "",
            cdbalance:""
        }
    }

    getStats(){
        let token = `Bearer ${JWT.jwt}`

        fetch( `${URL.url}/Me` , {
            headers:{
                authorization: token
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
                        usersName: data.firstName,
                        overallBalances: data.combinedBalance,
                        savingsBalance: data.savingsBalance,
                        checkingBalance: data.checkingBalance,
                        cdbalance: data.cdbalance
                    }  

                )
        })
    }

componentDidMount(){
    this.getStats();
}

    render(){
        return(
            <div>
                <h4>Welcome {this.state.usersName}</h4>
                <ul id="accountBalances">
                    <li>
                    Overall Balance: {this.state.overallBalances}
                    </li>
 
                    <li>
                    Savings Balance: {this.state.savingsBalance}
                    </li>

                    <li>
                    Checking Balance: {this.state.checkingBalance}
                    </li>

                    <li>
                    CD Accounts Balance: {this.state.cdbalance}
                    </li>

                </ul>

            </div>
        )
    }
}

export default AccountBalances 

