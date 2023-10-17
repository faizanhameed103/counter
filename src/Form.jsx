import { Component } from "react";
class Form extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'hello',
            address:''
        }
        this.handleUsername = this.handleUsername.bind(this);
        this.handleAddress = this.handleAddress.bind(this)
    }
    handleUsername(event){
        this.setState({
            name:event.target.value
        })
    }
    handleAddress(event){
        this.setState({
            address:event.target.value
        })
    }
    handleSubmit(event){
        alert('A response was submitted')
        event.preventDefault()
    }

    render(){
        return(
            <form>
                <div>
                    <label>UserName</label>
                    <input type="text" value={this.state.name} onChange={this.handleUsername} ></input>
                    <br/>
                    <label>Address</label>
                    <textarea value={this.state.address} onChange={this.handleAddress}/>
                    <button onClick={this.handleSubmit}>submit</button>
                </div>
            </form>
        )
    }
}
export default Form