import React, { useState } from 'react'

export default function Form({userinfo}) {
  let [details, setDetails] = useState('');
  let [quantity, setquantity] = useState(1);

  function handleFrmData(e){
      e.preventDefault();

      if(!details) return;

      let newItem = {details, quantity, packed: 'false', id: Date.now()};
      userinfo(newItem);
  }

  return (
    <>
        <form action="" className='add-form' onSubmit={handleFrmData}>
          <h3>What do you need for your 😍 trip?</h3>
          <select onChange={(e)=> setquantity(Number(e.target.value))}>

                  {Array.from({length: 20}, (_, i) => i + 1).map
                  ((num) => (
                      <option value={num} key={num}>{num}</option>
                    ))}
                    
          </select>
          <input type="text" placeholder='item...' value={details} onChange={(e)=> setDetails(e.target.value)}/>
          <button>Add</button>
        </form>  
    </>
  )
}
