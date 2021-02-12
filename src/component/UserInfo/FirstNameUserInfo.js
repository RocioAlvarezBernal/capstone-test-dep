import React from 'react'
import LISbutton from '../LISbutton'
import UserStore from '../SignIn/UserStore'
import JWT from '../JWT';
class FirstNameUserInfo extends React.Component {

    constructor(props){
        super(props)
        this.state={
            fName: "loading...",
            isInEditMode: false
        }
    }
   
     showDisplay(){
        let testToken= `Bearer ${ JWT.jwt}`
        
        fetch ('http://localhost:8080/api/Me', {
            
            headers: 
                {
                    'Authorization': testToken
                }
            })

        .then(response=>{
            if (!response.ok){
                throw Error ("RESPONSE NOT OKAY");
            }
            return response.json();
        })
        .then(data=>{
            const FNpassed = data.firstName
                console.log(FNpassed)
                this.setState(
                    {fName: FNpassed}
                )
        })
    }

// edit 
// ______________________________________
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
                    className='InputField'
                    type='text' 
                    name='fName' 
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
                <h4>First Name:  </h4>
            <div >
                <p onDoubleClick={this.editMode}>{this.state.fName}</p>
            </div>

            {/* <button
                    value= 'view'
                    // disabled={this.state.buttonDisables}
                    onClick ={this.showDisplay}
                    className='lisb'
            >views</button>  */} 
         </div> 
        )
    }
    componentDidMount() {
        this.showDisplay()
    }

    render(){

        return this.state.isInEditMode ? 
            this.renderEditView():this.renderDefaultView()
    }
}

export default FirstNameUserInfo 

