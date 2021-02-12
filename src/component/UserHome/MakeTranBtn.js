import React from 'react'; 
import InputField from "../InputField"
import JWT from "../JWT"

class MakeTranBtn extends React.Component {
    constructor(){
        super()
        this.state = {
            isClciked: false,
            Id: null,
            Amount: null
        }
        this.onClick = this.onClick.bind(this);
        this.postTran = this.postTran.bind(this);
        // this.defaultView = this.defaultView.bind(this);
    }

onClick() {
    this.setState(
        {
            isClciked: !this.state.isClciked
        }
    )
    console.log(this.state.isClciked)
}

setInputValue(property, val){
    val=""
    this.setState({
        [property]:val
    })
}


async postTran(){
    let jsonbody = {
        amount: this.state.Amount,
        checking: this.state.Id
    }
    let testToken= `Bearer ${JWT.jwt}`

    try{ 
        console.log(jsonbody);

    let res = await fetch('http://localhost:8080/api/Me/CheckingAccount/Deposit' , {
        method: 'POST',
        headers: 
        {
            'Authorization': testToken
        },
        body: JSON.stringify(jsonbody)
    });
    let result = await res.json();
    console.log(result);

    if(result && result.success){
        console.log("true")
      }
}
    
catch(e){
    console.log(e)
}
}

isClickedT(){
    return (
        <div> 
            <input type='text' placeholder="$00.00"
            value = {this.state.Amount ? this.state.Amount: ""}
            onChange= { (val) => this.setInputValue('Amount' , val)}

            >
            </input>

            <input type='text' placeholder="AccountID"
            value = {this.state.Id ? this.state.Id: ""}
            onChange = { (val) => this.setInputValue('Id' , val)}
            >
            </input>

            <br></br>

            <button
            onClick={this.postTran}
            className='btn'>
                Submit
            </button>

            <button
                className='btn'
                onClick={this.onClick}>
                Cancel
            </button>

           
        </div>
        
    )
}

defaultView () {
    return(
        <div>
            <button
                className='btn'
                onClick={this.onClick}
            >
                Make a Transaction in checking account
            </button>
        </div>
    )
}

    render(){
        return this.state.isClciked ? 
            this.isClickedT() : this.defaultView()
    }
}

export default MakeTranBtn;