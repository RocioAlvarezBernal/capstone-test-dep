import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp'
import Nav from './Nav'


class SISUFormArea extends React.Component{

  constructor(){
    super()
    this.state = {
      isEmptyState: false
    }
  }

  toggelDisplay = () =>{
    this.state({
      ...this.state,
      isEmptyState: false,
      isAddTripState: true
    })
  }
  
  render(){
    return (
      <div className="ASISUFormAreapp">
          <SignIn />
          <SignUp />
      </div>
    );
  }
  }

  export default SISUFormArea;
  
