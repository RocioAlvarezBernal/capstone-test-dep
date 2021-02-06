import React from 'react'

class DeleteABankAccount extends React.Component {

    constructor(){
        super()
        this.state={
            inDisplayMode: false,
            accId: null
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

        const buttonText =  this.state.inDisplayMode ? "Cancel" : "Delete A Bank Account";
        const form = this.state.inDisplayMode ? (

            <div >
                    <div>
                        <button
                            className= "btn"
                            type="submit"
                            onSubmit = {this.onSubmit}
                        >
                            Submit
                        </button>
                        <p>Select the account you want to delete</p>
                        
                        <table >
{/* Savings */}
                            <tr><th>Savings</th></tr>
                            <tr><td>AccountId</td></tr>
{/* Checkings */}
                            <tr><th>Checkings</th></tr>
                            <tr><td>AccountId</td></tr>
                            <tr><td>AccountId</td></tr>
{/* CD */}
                            <tr><th>Certifcate of Deposit</th></tr>
                            <tr><td>AccountId</td></tr>
{/* IRA */} 
                            <tr><th>IRA</th></tr>
                            <tr><th>Rollover IRA</th></tr>
                            <tr><td>AccountId</td></tr>
                            <tr><th>Roth IRA</th></tr>
                            <tr><td>AccountId</td></tr>
                            <tr><th>Regular IRA</th></tr>
                            <tr><td>AccountId</td></tr>  
                    </table>
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

export default DeleteABankAccount 