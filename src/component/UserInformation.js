import React from 'react'
import FirstNameUserInfo from './FirstNameUserInfo';
import LastNameUserInfo from './LastNameUserInfo';
import PasswordUserInfo from './PasswordUserInfo';

class UserInformation extends React.Component {

    // constructor(){
    //     super()
    //     this.state={
    //         fName:'FNDefault',
    //         lName:'Default',
    //         pass:'Default',
    //         isInEditMode: false
    //     }
    // }

    
    // editMode=()=>{
    //     this.setState(
    //         {
    //             isInEditMode: !this.state.isInEditMode
    //         }
    //     )
    //     // console.log("in edit mode")
    // }

    // updateValue=()=>{
    //     this.setState(
    //         {
    //           isInEditMode: false,
    //           fName: this.refs.textInput.value
    //         }
    //     )
    // }

    // renderEditView = () => {
    //     return (
    //         <div>
    //             <h4>First Name:  </h4>
    //             <input 
    //                 class="userTextInput" 
    //                 type='text' 
    //                 name='fName' 
    //                 defaultValue={this.state.value}
    //                 ref="textInput"
    //                 />  
    //             <button onClick={this.editMode}>X</button>
    //             <button onClick={this.updateValue}>Ok</button>
    //         </div>
    //     )
    // }

    // renderDefaultView=()=>{
    //     return(
    //         <div>
    //             <h4>First Name:  </h4>
    //         <div id = 'userInfoDisp'>
    //             <p onDoubleClick={this.editMode}>{this.state.fName}</p>
    //         </div>
    //     </div>
    //     )
    // }


    render(){
        // const {fName} = this.state;
        // const {lName} = this.state;
        // const {pass} = this.state;

        return (
            <div>
                <h4>User Information </h4>
                <p>Double click to edit</p>
                <FirstNameUserInfo />
                <LastNameUserInfo />
                <PasswordUserInfo />
            </div>
        )
                

       
                    /*<input class="userTextInput" type='text' name='fName' onChange={this.handleChange}></input>

                    <h4 >Last Name: {lName} </h4>
                    <input class="userTextInput" type='text' name='lName' onChange={this.handleChange}></input>

                    <h4>Password {pass} </h4>
                    <input class="userTextInput" type='password' name='pass' onChange={this.handleChange}></input>

                    <br></br> 
                    {/* <input type='submit' class="userBtn" value='edit' ></input> 
                    {/* <input type='submit' class="userBtn" value='save'onClick={this.handleSaveClick} ></input> 
                    <br></br>

                    {/* <input type='submit' class="userBtn" value="Delete Account"></input>
                 </form> */
        
    }
}

export default UserInformation 

