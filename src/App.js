//route of our entire application
import React, { useState} from 'react';
import BeerList from './BeerList';

function App() {
  //object destructuring nez sta je to
  const [beers, setBeers] = useState(['Beer 1', 'Beer 2', 'Beer 3'])
  //returning beerlist as our first element of app
  
  return (
    <>
    <BeerList beers={beers} />
    <input type="text" />
    <button>Add Beer</button>
    <button>Clear beer</button>
  </>
  )
   
}

export default App;
