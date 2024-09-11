import React, { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import Packing from './Packing';
import Status from './Status';

export default function Home() {
  
  let [initialItems, setinitialItems] = useState([]);

  function userTripDetails(userinfo){
      setinitialItems((userinfos) => [...userinfos, userinfo]);
      // console.log("initialItems",initialItems);
  }

  function handleRemove(id){
    setinitialItems((items)=> items.filter((item)=> item.id !== id));
  }

  function handleToggle(id){
    setinitialItems((items)=> items.map((item)=> item.id === id ? {...item, packed: !item.packed} : item))
  }

  function handleClear(){
    setinitialItems([]);
  }

  return (
    <div className='app'>
          <Logo/>
          <Form userinfo={userTripDetails}/>
          <Packing userdata={initialItems} onDeleteitem={handleRemove} onCheck={handleToggle} clearLsit={handleClear}/>
          <Status selectedItems={initialItems}/>
    </div>
  )
}
