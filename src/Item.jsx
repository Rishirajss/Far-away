import React from 'react'

export default function Item({travelData, deleteItem, checkedItem}) {
  console.log("values", travelData)
  
  function handleRemove(id){
      deleteItem(id);
  }

  function handleChecked(id){
    checkedItem(id);
  }

  return (
    <>
      <li>
          <input type="checkbox" checked={travelData.packed.value} onClick={()=>handleChecked(travelData.id)}/>
          <span style={travelData.packed ? {textDecoration: 'line-through'} : {}}>
                {travelData.quantity}  
                {travelData.details}
          </span>
          <button onClick={()=>handleRemove(travelData.id)}>❌</button>
      </li> 
    </>
  )
}
