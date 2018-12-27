import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import logo from './logo.svg';
import cat from './cat.jpg';
import './App.css';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {list : [], text: ''  };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.removeList = this.removeList.bind(this);
      this.removeListAll = this.removeListAll.bind(this);
    }

    

    handleChange(event) {
      this.setState({text: event.target.value});
    }



    handleSubmit(event) {
      const newItem = {
      text: this.state.text,
      id: Date.now()
    };

      if (!this.state.text.length) {
      return;
    }
      event.preventDefault();
      this.setState(state => ({
      list: state.list.concat(newItem),
      text : ''
    }));
      
    }

    removeList(id) {

      console.log(id);
      console.log(this.state.list);
      
      var filtered = this.state.list.filter(function(value, index, arr){

      return value.id !== id;

      });

      console.log(filtered);
this.setState(state => ({
      list: filtered
      
    }));
    }


    removeListAll() {
      this.setState({list: []});
    }


    render() {
        
        let rmvBtn;

        if(this.state.list.length) {
           rmvBtn = <button className="btn btn-primary removeall" type="button" onClick={this.removeListAll}>Remove All</button>;
        }

        else {
          rmvBtn = '';
        }

        

        return (
            <div className="container mt-5 mt-5">
              <div className="row">
              <div className="col-lg-4 offset-lg-4 ">
              <div className="form-inline">
              <input className="form-control" type="text" value={this.state.text} onChange={this.handleChange} />
              <button className="btn btn-primary" type="button" onClick={this.handleSubmit}>Submit</button>
    
              <ul className="list-group mt-3 mb-3">
                {this.state.list.map((item,index) => (
                  <li className="list-group-item" key={item.id}>{index + 1} / {item.text} <button className="btn btn-primary" type="button" onClick={() => this.removeList(item.id)}>Remove</button></li>
                ))} 
              </ul>
            
              {rmvBtn}  
            
              </div>
              </div>
              </div>
            </div>
        );
    }
}



export default App;
