import React from 'react'
import Item from './Item';

export default function Packing({userdata}) {
    // console.log("items", userdata);
    
    console.log(userdata);
  return (
    <div className='list'>
        <ul>
            {userdata.map((items) => (
              <Item travelData={items} key={items.id}/>
            ))}
        </ul>
    </div>
  )
}
