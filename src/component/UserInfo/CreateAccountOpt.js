import React from 'react'

class CreateAccountOpt extends React.Component {

    constructor(){
        super()
        this.state={
            content:null,
            inDisplayMode: false
        }
    }

    displayMode=()=>{
        this.setState(
            {
                inDisplayMode: !this.state.inDisplayMode
            }
        )
    }

    updateValue=()=>{
        this.setState(
            {
                inDisplayMode: false,
                content: this.refs.textInput.value
            }
        )
    }

    renderDisplayMode = () => {
        return (
            <div>
                <h4>Select the type of account:</h4>
                <div>
                <label for="Account">Select the type of account</label>
                <select id="acct" name="acct">
                <option value="Savings">Savings</option>
                <option value="Checkings">Checkings</option>
                <option value="CD">CD</option>
                <option value="IRA">IRA</option>
                </select>
            </div>

            <LISbutton 
                text= 'Submit'
                disabled={this.props.disabled}
                onClick={this.updateValue}
                className='lisb'
            />
            </div>
        )
    }

    renderDefaultView=()=>{
        return(
            <div>
  
            </div>
        )
    }



    render(){

        return this.state.inDisplayMode ? 
            this.renderDisplayMode():this.renderDefaultView()
        }
}

export default CreateAccountOpt 
