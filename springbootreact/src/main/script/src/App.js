import React, { Component } from 'react';
import 'whatwg-fetch';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    handleChange = (event) =>{
        this.setState({request:event.target.value})
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        var request = this.state.request.trim();
        if(!request){
            return;
        }
        fetch('/echo?request=request')
            .then(response=>{
                return response.text();
            })
            .then(body=>{
                alert(body);
            });
    }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Do You Hear me</h2>
        </div>
        <p className="App-intro">
            <form className="App-intro" onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange}/>
                <input type="submit" value="Echo"/>
            </form>
        </p>
      </div>
    );
  }
}

export default App;
