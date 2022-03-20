import React from 'react'
// rfc creates function component
export default function BeerList({beers}) {
  return (
      //prints out 3 beacuse we have 3 beers on the list
    <div>
        
        {beers.length}
    </div>
  )
}
