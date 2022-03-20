import React from 'react'
import Beer from './Beer'
// rfc creates function component
export default function BeerList({beers}) {
  return (
      beers.map(beer => {
          return <Beer key={beer} beer={beer} />
      })
  )
}
