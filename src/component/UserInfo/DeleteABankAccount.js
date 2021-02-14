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
                <div >
        
              <button
              onClick={this.onSubmit}
              >
                  submit
              </button>

                <br/>

                <input 
                type="text"
                placeholder= "Account Id"
                onChange={this.onInputChange}
                >
                </input>


                <button type="button" class="btn" data-toggle="modal" data-target="#Modal">
                        button
                    </button>

                    <div class="modal" tabindex="-1" role="dialog">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p>Modal body text goes here.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary"></button>
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                    </div>
               
            </div>



            )
        }
    }
    

export default DeleteABankAccount 