import React from 'react'
import JWT from '../JWT';
import URL from '../URL';
class CreateAccountOpt extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            balance: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onInputChange=this.onInputChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({
            value: event.target.value
        });
      }
    
      handleSubmit(event) {
        console.log( this.state.value);

        const type = this.state.value;

        event.preventDefault();
        this.fetchTypeSetting();
      }

      onInputChange(event){
            this.setState({
                balance: event.target.value
            });
            console.log(this.state.balance)
        }
      
      

      fetchTypeSetting(){

        let testToken= `Bearer ${JWT.jwt}`

        let jsonbody = {
            "balance": this.state.balance
        }

        fetch(`${URL.url}/Me/${this.state.value}`, {
            method: 'post',
            headers:
            {
                'Authorization': testToken,
                // 'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonbody)
        })
        console.log(jsonbody)
    }



      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              type of account:
              <select value={this.state.value} onChange={this.handleChange}>
                    <option value="null">-</option>
                    <option value="SavingsAccounts">Savings</option>
                    <option value="CheckingAccount">Checkings</option>
                    <option value="CD">CD</option>
                    <option value="IRA">IRA</option>
              </select>
            </label>

            <input
                type="text"
                placeholder= "starting balance"
                onChange={this.onInputChange}
            >
            </input>
            <input type="submit" value="Submit" />
          </form>
        );
      }
    }

export default CreateAccountOpt 
