import React from 'react'

class CreateAccountOpt extends React.Component {
    render(){
        return(
            <div>
                <label for="Account">Select the type of account</label>
                <select id="acct" name="acct">
                <option value="Savings">Savings</option>
                <option value="Checkings">Checkings</option>
                <option value="CD">CD</option>
                <option value="IRA">IRA</option>
                </select>
            <form>
                <input type='text'></input>
                <button>Submit</button>
            </form>

            </div>
        )
    }
}

export default CreateAccountOpt 
