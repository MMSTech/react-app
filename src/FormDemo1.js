import React, { Component } from 'react'

export default class FormDemo1 extends Component {

    state = {username : '' , city: ''}

    onChangeHandler =(event)=>{
        //this.setState({username : event.target.value})
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]:value});
    }

    onSubmitHandler = (event)=>{
        event.preventDefault();
       alert(this.state.username);
    } 

  render() {
    return (
      <div>
           <form onSubmit={this.onSubmitHandler}>
                <h3>username</h3>
                <input  onChange={this.onChangeHandler}
                  type='text' name='username'>
                </input>
                <h3>username is{this.state.username}</h3>


                <h3>city</h3>
                <input  onChange={this.onChangeHandler}
                  type='text' name='city'>
                </input>
                <h3>city is{this.state.city}</h3>
                <input  
                  type='submit' value="save"></input>
           </form>

      </div>
    )
  }
}
