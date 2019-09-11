import React, { useState } from 'react';
import './App.css';

import SelectionCard from '../src/components/SelectionCard'
import RepList from '../src/components/RepList'

function App() {

  const [congress, setCongress] = useState(null)
  const [selectedState, setSelectedState] = useState('')
  const [listOfReps, setListOfReps] = useState(null)

  const submitHandler = async (e, setListOfReps) => {
    e.preventDefault()
    setListOfReps()
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
              />
  }

  return (
    <div className="App">
        {content}
    </div>
  );
}

export default App;