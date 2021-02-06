import React from 'react'; 
import InputField from "../InputField"

class MakeTranBtn extends React.Component {
    constructor(){
        super()
        this.state = {
            isClciked: false
        }
        this.onClick = this.onClick.bind(this);
        this.isClickedT = this.isClickedT.bind(this);
        this.defaultView = this.defaultView.bind(this);
    }

onClick() {
    this.setState(
        {
            isClciked: !this.state.isClciked
        }
    )
    console.log(this.state.isClciked)
}

isClickedT(){
    return (
        <div> 
            <InputField
                type="radio" 
                placeholder="Deposit"
                // value = { this.state.username ? this.state.username: ''}
                // onChange = { (val) => this.setInputValue('username' , val)}
            /> 

            <InputField 
                 type= 'radio'
                 placeholder="null"
                 value = "Withdraw"
                 onChange = "null"

            />
{/* ///// */}
            <InputField 
                 type="radio" 
                 placeholder="cash"
                 value = "cash"
            />
            <InputField 
                 type="radio" 
                 placeholder="check"
            />
            <InputField 
                 type="radio" 
                 placeholder="ATM"
            />
            <InputField 
                 type="radio" 
                 placeholder="Transfer"
            />
{/* //// */}
            <InputField 
                type="number"
                placeholder="From"
            />
            <InputField    
                type="number"
                placeholder="to"
            />
        

            <button
            className='btn'>
                Submit
            </button>

            <button
                className='btn'
                onClick={this.onClick}>
                X
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
                Make a Transaction
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