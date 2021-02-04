import React from 'react'
import LISbutton from '../LISbutton'

class PasswordUserInfo extends React.Component {

    constructor(props){
        super(props)
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
                    className='InputField'
                    type='text' 
                    name='pass' 
                    defaultValue={this.state.value}
                    ref="textInput"
                    />  
                {/* <button onClick={this.editMode}>X</button>
                <button onClick={this.updateValue}>Ok</button> */}
                    
                    <LISbutton 
                    text= 'Submit'
                    disabled={this.props.disabled}
                    onClick={this.updateValue}
                    className='lisb'
                    />

                   <LISbutton 
                    text= 'Cancel'
                    disabled={this.props.disabled}
                    onClick={this.editMode}
                    className='lisb'
                    />

            </div>
        )
    }

    renderDefaultView=()=>{
        return(
            <div>
                <h4>Password:</h4>
            <div >
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

