import React from 'react'

class UserInformation extends React.Component {

    constructor(){
        super()
        this.state={
            fName:'',
            lName:'',
            pass:''
        }
    }

    handleChange=(e)=>{
        this.setState(
            {
                [e.target.name]:e.target.value
            }
        )
        this.state.fName = this.state.fName
        this.state.lName = this.state.lName
        this.state.pass = this.state.pass
    }

    render(){
        const {fName} = this.state
        const {lName} = this.state
        const {pass} = this.state

        return(
            <div>
                <form id = 'userInfoDisp'>

                    <h4>First Name: {fName} </h4>

                    <input class="userTextInput" type='text' name='fName' onChange={this.handleChange}></input>

                    <h4 >Last Name: {lName} </h4>
                    <input class="userTextInput" type='text' name='lName' onChange={this.handleChange}></input>

                    <h4>Password {pass} </h4>
                    <input class="userTextInput" type='password' name='pass' onChange={this.handleChange}></input>

                    <br></br>
                    <input type='submit' class="userBtn" value='edit'></input>
                    <input type='submit' class="userBtn" value='save'></input>
                    <br></br>

                    <input type='submit' class="userBtn" value="Delete Account"></input>
                </form>

            </div>
        )
    }
}

export default UserInformation 

