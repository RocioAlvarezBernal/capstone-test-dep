import React from 'react'

class FirstNameUserInfo extends React.Component {

    constructor(){
        super()
        this.state={
            fName:'FNDefault',
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
              fName: this.refs.textInput.value
            }
        )
    }

    renderEditView = () => {
        return (
            <div>
                <h4>First Name:  </h4>
                <input 
                    class="userTextInput" 
                    type='text' 
                    name='fName' 
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
                <h4>First Name:  </h4>
            <div class = 'userInfoDisp'>
                <p onDoubleClick={this.editMode}>{this.state.fName}</p>
            </div>
        </div>
        )
    }


    render(){

        return this.state.isInEditMode ? 
            this.renderEditView():this.renderDefaultView()
    }
}

export default FirstNameUserInfo 

