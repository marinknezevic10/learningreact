import React from 'react'
//we want to print out each beer not just the number of beers
export default function Beer({beer}) {
  return (
    <div>

        <label>
            <input type ="checkbox" checked={beer.complete} />
            {beer.name}
        </label>
        
    </div>
  )
}
