import React from 'react'; 
import InputField from "../InputField";
import JWT from "../JWT";
import LISbutton from '../LISbutton';
import URL from '../URL';

class MakeTranBtn extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            isClciked: false,
            sourceId:'',
            targetId:'',
            Amount:'',
            buttonDisables: false,
        }
        this.doTran = this.doTran.bind(this);
        this.setAmount = this.setAmount.bind(this)
        this.setTarget = this.setTarget.bind(this)
        this.setSource = this.setSource.bind(this)
    }

setAmount(event){
    this.setState({
        Amount: event.target.value,
    })
    console.log(this.state)
}

setSource(event){
    this.setState({
        sourceId:event.target.value,
    })
    console.log(this.state)
}

setTarget(event){
    this.setState({
        targetId: event.target.value,
    })
    console.log(this.state)
}

resetForm(){
    this.setState({
        sourceId:'',
        targetId:'',
        Amount:'',
    })
}

async doTran(){
    let jsonbody = {
            sourceAccountID : this.state.sourceId,
            targetAccountID : this.state.targetId,
            amount : this.state.Amount,
    }
    let testToken= `Bearer ${JWT.jwt}`

    let results = await fetch (`${URL.url}/Me/Transfer`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': testToken
            },
            body: JSON.stringify(jsonbody)
        }); 
        let result = await results.json();
        // console.log(result);

             if(results.status === 200 ){
                console.log("thisfar")
            }
        }

    render(){        
        return(
            <div className="borderMakeTransfer"> 
                <div className='makeTransfer'>
                    <h3>Make Transfer</h3>
                    <input
                    type="text" 
                    placeholder="Amount"
                    onChange = {this.setAmount}
                    ></input>   

                    <input
                    type="text" 
                    placeholder="Source Account Id"
                    onChange = {this.setSource}
                    ></input>   

                    <input
                    type="text" 
                    placeholder="Target Account Id"
                    onChange = {this.setTarget}
                    ></input>   

                    <button 
                        className= "btn"
                        text= 'submit'
                        disabled={this.state.buttonDisables}
                        onClick ={ this.doTran}
                        className='logoutbtn'
                    >
                        submit
                    </button>

                </div>
            </div>
        )
    }
}

export default MakeTranBtn;