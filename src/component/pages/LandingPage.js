import React from 'react'
import NavigationBar from '../NavigationBar';
import SUForm from '../SUForm'
import SIForm from '../SIForm'
class LandingPage extends React.Component {
    render(){
        return(
            <main id='LandingPage' >
                {/* <NavigationBar /> */}
                <SUForm />
                <SIForm />

            </main>

        )
    }
}

export default LandingPage  