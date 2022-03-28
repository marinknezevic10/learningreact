//route of our entire application
import React, { useState, useRef, useEffect} from 'react';
import BeerList from './BeerList';
import {Switch,Route} from 'react-dom'
import Login from './login/Login'
import { v4 as uuidv4 } from 'uuid'

const LOCAL_STORAGE_KEY = 'beerApp.beers'

function App() {
  //object destructuring nez sta je to
  const [beers, setBeers] = useState([])
  const beerNameRef = useRef()

  //storing
  useEffect(() => {
    const storedBeers = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedBeers) setBeers(storedBeers)
  }, [])

  //getting beer list
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(beers))}, [beers]
  )

  //adding beer function
  function handleAddBeer(e){
    const name = beerNameRef.current.value
    if (name=== '') return
    setBeers(prevBeers => {
      return [...prevBeers, {id: uuidv4(), name: name, complete: false}]
    })
    beerNameRef.current.value = null

  }

  //returning beerlist as our first element of app
  
  return (
    <>
    <div>
      <Route exact path='/' component={Login}/>
    <BeerList beers={beers} />
    <input ref={beerNameRef} type="text" />
    <button onClick={handleAddBeer}>Add Beer</button>
    <button>Clear beer</button>
    </div>
  </>
  )
   
}

export default App;
