import React from 'react'

class CreateAccountOpt extends React.Component {

    constructor(){
        super()
        this.state={
            inDisplayMode: false,
            initialBalance: null
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit(){
        console.log(this.state)
        // this.setState({inDisplayMode: !this.state.inDisplayMode});
    }

    render(){
        const { items } = this.state;

        const buttonText =  this.state.inDisplayMode ? "Cancel" : "Create A New Bank Account";
        const form = this.state.inDisplayMode ? (

            <div ref="Form">
                    <div>
                    <button
                        className= "btn"
                        type="submit"
                        onSubmit = {this.onSubmit}
                    >
                        Submit
                    </button>
                        <label for="Account" placeholder="Select a type of account">Select the type of account</label>
                        <select id="acct" name="acct">
                        <option value="Savings">Savings</option>
                        <option value="Checkings">Checkings</option>
                        <option value="CD">CD</option>
                        <option value="IRA">IRA</option>
                        </select>
                         {/*<div> 
                            
                             <input
                                name="startingAmount"
                                type="text"
                                placeholder="Amount"
                                min="0.01" 
                                step="0.01" 
                                max="2500"
                                placeholder ="$00.00" 
                                value = {this.state.startingAmount}
                                onChange={this.onInputChange}
                            ></input> */}

                            <div class="input-group">
                            <span class="input-group-text">$</span>
                            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
                            <div class="input-group-append">
                            {/* <span class="input-group-text">0.00</span> */}
                            </div>
                            </div>

                        </div>
                    </div>
             ) : ( <div></div>

        );

        return(
            <div>
            <button
                className='btn'
                onClick = {( () => {
                    this.setState({inDisplayMode: !this.state.inDisplayMode});
                })}   
            >
            {buttonText}
            </button>
            {form}

           
           </div>

        )
    }
}

export default CreateAccountOpt 
