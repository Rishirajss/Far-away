import React from 'react'

export default function Status({selectedItems}) {

  if(!selectedItems.length) return (
                            <p className='stats'>
                                <em> Start adding some items to your packing list 🚀</em>
                             </p>
                            )
  // console.log(selectedItems)
  let numItems = selectedItems.length;
  let packedIems = selectedItems.filter((items)=> items.packed).length;
  let packedPer = Math.round(packedIems / numItems * 100);
  return (
    <div>
         <footer className='stats'>
                <em>
                    {packedPer === 100 ? 
                      "You got everything! Ready to go "
                    : 
                      `💼 You have ${numItems} items on your list, and you already packed ${packedIems} (${packedPer}%)`
                    }
                </em>
         </footer>
    </div>
  )
}
