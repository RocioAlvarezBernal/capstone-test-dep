import React from 'react'; 

class LISbutton extends React.Component {
    render(){
        return(
            <div className='lisb'>
                <button
                    className='btn'
                    disabled={this.props.disabled}
                    onClick={()=> this.props.onClick()}
                >
                    {this.props.text}
                </button>
            </div>

        )
    }
}

export default LISbutton;