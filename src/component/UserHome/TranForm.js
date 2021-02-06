import React from 'react'

class TranForm extends React.Component {
    render(){
        return(
            <div>
                <form>
                    <div></div>
                    <input type= "number"></input>
                    <input type= "radio">Deposit</input>
                    <input type= "radio">Withdraw</input>

                    <input type= "radio">Cash</input>
                    <input type= "radio">Check</input>
                    <input type= "radio">ATM</input>
                    <input type= "radio">Transfer</input>

                    <input type = "text" placeholder="from"> </input>
                    <input type = "text" placeholder="to"> </input>

                    <input type="submit"></input>

                </form>
            </div>
        )
    }
}

export default TranForm 
