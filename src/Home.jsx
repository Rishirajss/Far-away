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

  return (
    <div className='app'>
          <Logo/>
          <Form userinfo={userTripDetails}/>
          <Packing userdata={initialItems}/>
          <Status/>
    </div>
  )
}
