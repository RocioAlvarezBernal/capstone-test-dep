import React from 'react'; 
import InputField from "../InputField";
import JWT from "../JWT";
import LISbutton from '../LISbutton';
import URL from '../URL';

class MakeTranBtn extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            isClciked: false,
            sourceId:'',
            targetId:'',
            Amount:'',
            buttonDisables: false,
        }
        this.doTran = this.doTran.bind(this);
        this.setInputValue = this.setInputValue.bind(this)
    }

setInputValue(property, val){
    val= val.trim();
    if(val.length>100){
        return
    }
    this.setState({
        [property]:val
    })
}

resetForm(){
    this.setState({
        sourceId:'',
        targetId:'',
        Amount:'',
    })
}

async doTran(){
    if (!this.state.Amount){
        return;
    }
    if(!this.state.sourceId){
        return;
    }
    if(!this.state.targetId){
        return;
    }
    this.setState({
        buttonDisables: false
        
    })

     let jsonbody = {
            sourceId : this.state.sourceId,
            targetId : this.state.targetId,
            Amount : this.state.Amount,
    }
    let testToken= `Bearer ${ JWT.jwt}`

    try{
        let res =await fetch (`${URL.url}/Me/Transactions`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authentication': testToken,
            },
            body: JSON.stringify(jsonbody)
        });
        let result = await res.json();
        console.log(result);

        if( res.status === 200){
        console.log("test")
        }

        else if (result&&result.success === false){
            this.resetForm();
        }
    }

    catch(e){
        console.log(e);
        this.resetForm();
    }
}

    render(){        
        return(
            <div className='make transfer'>
                Make Transfer
                <InputField
                 type="text" 
                 placeholder="Amount"
                 value = { this.state.Amount ? this.state.Amount: ''}
                 onChange = { (val) => this.setInputValue('Amount' , val)}
                 />   

                <InputField
                 type="Source Account ID" 
                 placeholder="Source Account Id"
                 value = { this.state.sourceId ? this.state.sourceId : ''}
                 onChange = { (val) => this.setInputValue('sourceId' , val)}
                 />   

                <InputField
                 type="text" 
                 placeholder="Target Account Id"
                 value = { this.state.targetId ? this.state.targetId : ''}
                 onChange = { (val) => this.setInputValue('targetId' , val)}
                 />   

                <button 
                    className= "btn"
                    text= 'submit'
                    disabled={this.state.buttonDisables}
                    onClick ={ () => this.doTran}
                    className='lisb'
                >
                    submit
                </button>

            </div>
        )
    }
}

export default MakeTranBtn;