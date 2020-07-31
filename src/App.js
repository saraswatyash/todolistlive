import React from 'react';
import Display from "./components/Display.js";
import './components/all.css'; 
import './App.css'; 
import Add from './components/Add.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  state={items:[]
  }
  addEvent=(item)=> {
    item.id=Math.floor(Math.random()*100);
    let items=[...this.state.items,item]
    this.setState({
      items:items
    })
  }
  delEvent=(id)=>{
    let updatedEvent=this.state.items.filter((item)=>{
      return item.id!==id;
    })
    this.setState({
      items:updatedEvent
    })
  }
  render(){
  return (
    <div className="App">
      <div className="App-header"><h1>To Do List</h1></div>
      <Display items={this.state.items} delEvent={this.delEvent}/>
      <Add addEvent={this.addEvent}></Add>
    </div>
  );
  }
}

export default App;
