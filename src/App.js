import React, { useState } from 'react';
import Axios from 'axios'

import './App.css';

import SelectionCard from './components/selectionCard/SelectionCard'
import RepList from './components/repList/RepList'

function App() {

  const [congress, setCongress] = useState(null)
  const [selectedState, setSelectedState] = useState('')
  const [listOfReps, setListOfReps] = useState(null)

  const resetHandler = () => {
    setCongress(null)
    setSelectedState('')
    setListOfReps(null)
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    if(congress === null || selectedState === '') {
      window.alert('make sure to pick senators or representatives and/or a state')
    } else if(congress === 'Senators') {
        Axios.get(`http://localhost:3000/senators/${selectedState}`)
        .then(res => {
          setListOfReps(res.data.results)
        })
    } else if(congress === 'Representatives') {
        Axios.get(`http://localhost:3000/representatives/${selectedState}`)
        .then(res => {
          setListOfReps(res.data.results)
        })
    } else 
    console.log('error in your submitHandler')
  }

  let content = <SelectionCard 
                  congress={congress}   
                  setCongress={setCongress}
                  selectedState={selectedState}
                  setSelectedState={setSelectedState}
                  submitHandler={submitHandler}
                />

  if(listOfReps){
    content = <RepList 
                congress={congress}
                selectedState={selectedState}
                listOfReps={listOfReps}
                resetHandler={resetHandler}
              />
  }

  return (
    <div className="App">
        {content}
    </div>
  );
}

export default App;