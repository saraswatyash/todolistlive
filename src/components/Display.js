import React from 'react';
import './all.css';
const Display=({items,delEvent})=>{
    const li=items.length?items.map((item)=>{
        const{name,id}=item;
        return(
            <div className="it" key={id} onClick={()=>{delEvent(id)}}> 
            <h3>{name}</h3>
            </div>
        )
    }):(<h3>Nothing To show Please Enter Some Notes</h3>)
    return(
        <div className="display">
            {li}
        </div>
    );
}
export default Display;