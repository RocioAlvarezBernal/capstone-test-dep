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
import URL from '../URL';


class TransactionSection extends React.Component {
    constructor(){
        super()
        this.state={
            id:0,
            amount: 0,
            date: null,
            isClicked: false
        }
    }
  
    render() {
        return(
            <div className="allTransactionSection">
                <MakeTranBtn />
                <br></br>
                <br></br>
                <br></br>

                <div id="listOfTransactions">
                    <SavTran />
                </div>                
            </div>

        )
    }
}

export default TransactionSection


