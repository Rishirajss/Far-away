import React, { useState } from 'react'
import Item from './Item';

export default function Packing({userdata, clearLsit, onDeleteitem, onCheck}) {
    // console.log("items", userdata);
    
    // console.log(userdata);
    let [shorted, setShorted] = useState('input');
    let shortItem;

    if(shorted === 'input') shortItem = userdata;
    if(shorted === 'description') 
       shortItem = userdata
                   .slice()
                   .sort((a,b)=>a.description.localeCompare(b.description));
                   
    if(shorted === 'packed') shortItem = userdata.slice().sort((a,b)=> Number(a.packed) - Number(b.packed));

  return (
    <div className='list'>
        <ul>
            {shortItem.map((items) => (
              <Item travelData={items} deleteItem={onDeleteitem} checkedItem={onCheck} key={items.id}/>
            ))}
        </ul>
        <div className='action'>
              <select value={shorted} onChange={(e)=>setShorted(e.target.value)}>
                  <option value="input">Select by input</option>
                  <option value="description">Select by description</option>
                  <option value="packed">Select by packed</option>
              </select>
              <button onClick={clearLsit}>Clear list</button>
        </div>
    </div>
  )
}
