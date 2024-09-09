import React from 'react'

export default function Item({travelData}) {
  // console.log("values", travelData)
  function handleRemove(id){
    // console.log("id", id);
    let removeData = id.filter((v,i)=> i !== i);
    travelData(...removeData);
  }
  return (
    <>
      <li>
          <span style={travelData.packed ? {} : {textDecoration: 'line-through'}}>
                {travelData.quantity}  
                {travelData.details}
          </span>
          <button onClick={()=>handleRemove(travelData.id)}>❌</button>
      </li> 
    </>
  )
}
