import React from 'react'
import JWT from '../JWT'
import LISbutton from '../LISbutton'
import URL from '../URL'

class DeleteABankAccount extends React.Component {

    constructor(){
        super()
        this.state={
            inDisplayMode: false,
            isClicked:false,
            accId: ""
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event){
        this.setState({
            accId: event.target.value
        });
        console.log(this.state.accId)
    }

    selectAcct(){
        let testToken= `Bearer ${JWT.jwt}`

        fetch(`${URL.url}/Me/Delete/${this.state.accId}`, {
            method: 'DELETE',
            headers:
            {
                'Authorization': testToken
            }
        }
        )
    }

    onSubmit(){
            this.setState({
                isClicked: !this.state.isClicked
            });
            console.log(this.state)
            this.selectAcct()
        }    

    render(){
            return (
                <div className="delacct">
                <h3>Delete an existing account</h3>
                <hr class="new1"></hr>
                <form>
                    <input 
                    className="delCrtinput"
                    type="text"
                    placeholder= "Account Id"
                    onChange={this.onInputChange}
                    >
                    </input>
                    <br/>

                    <button
                    onClick={this.onSubmit}
                    className="delCrtBtn"
                    >
                    submit
                    </button>
                </form>
            </div>
            )
        }
    }
    

export default DeleteABankAccount 