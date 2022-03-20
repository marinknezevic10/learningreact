//route of our entire application
import React, { useState, useRef} from 'react';
import BeerList from './BeerList';

function App() {
  //object destructuring nez sta je to
  const [beers, setBeers] = useState([])
  const beerNameRef = useRef()

  //adding beer function
  function handleAddBeer(e){
    const name = beerNameRef.current.value
    if (name=== '') return
    setBeers(prevBeers => {
      return [...prevBeers, {id: 1, name: name, complete: false}]
    })
    beerNameRef.current.value = null

  }

  //returning beerlist as our first element of app
  
  return (
    <>
    <BeerList beers={beers} />
    <input ref={beerNameRef} type="text" />
    <button onClick={handleAddBeer}>Add Beer</button>
    <button>Clear beer</button>
  </>
  )
   
}

export default App;
