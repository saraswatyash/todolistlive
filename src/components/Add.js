import React from 'react';
import './Display.js';
import './all.css'
class Addevent extends React.Component{
    state={
        name:null
    }
    addeve=(event) => {
        this.setState({
            [event.target.id]:event.target.value
        });
    }
    handleClick=(event)=>{
        event.preventDefault();
        this.props.addEvent(this.state);
    }
    render(){
        return(
            <form className="frm" onSubmit={this.handleClick}>
                <label htmlFor="name">Insert item in to do list</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input id="name" placeholder="Enter Event" onChange={this.addeve}></input>
            </form>
        )
    }
}
export default Addevent;