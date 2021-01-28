import React from 'react'

class PasswordUserInfo extends React.Component {

    constructor(){
        super()
        this.state={
            pass:'PassDefault',
            isInEditMode: false
        }
    }

    editMode=()=>{
        this.setState(
            {
                isInEditMode: !this.state.isInEditMode
            }
        )
    }

    updateValue=()=>{
        this.setState(
            {
              isInEditMode: false,
              pass: this.refs.textInput.value
            }
        )
    }

    renderEditView = () => {
        return (
            <div>
                <h4>Password:  </h4>
                <input 
                    class="userTextInput" 
                    type='text' 
                    name='pass' 
                    defaultValue={this.state.value}
                    ref="textInput"
                    />  
                <button onClick={this.editMode}>X</button>
                <button onClick={this.updateValue}>Ok</button>
            </div>
        )
    }

    renderDefaultView=()=>{
        return(
            <div>
                <h4>Password:</h4>
            <div class = 'userInfoDisp'>
                <p onDoubleClick={this.editMode}>{this.state.pass}</p>
            </div>
        </div>
        )
    }

    render(){

        return this.state.isInEditMode ? 
            this.renderEditView():this.renderDefaultView()
    }
}

export default PasswordUserInfo 

