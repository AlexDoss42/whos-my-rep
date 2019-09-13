import React, { useState } from 'react';
import Axios from 'axios'

import './App.css';

import SelectionCard from '../src/components/SelectionCard'
import RepList from '../src/components/RepList'

function App() {

  const [congress, setCongress] = useState(null)
  const [selectedState, setSelectedState] = useState('')
  const [listOfReps, setListOfReps] = useState(null)

  const submitHandler = async (e) => {
    e.preventDefault()
    if(congress === null || selectedState === '') {
      window.alert('make sure to pick senators or representatives and/or a state')
    } else if(congress === 'senators') {
        Axios.get(`http://localhost:3000/senators/${selectedState}`)
        .then(res => {
          setListOfReps(res.data.results)
        })
    } else if(congress === 'representatives') {
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
              />
  }

  return (
    <div className="App">
        {content}
    </div>
  );
}

export default App;

let results = [  
  {  
     "name":"Orrin Hatch",
     "party":"R",
     "state":"UT",
     "district":"Senior Seat",
     "phone":"202-224-5251",
     "office":"104 Hart Senate Office Building",
     "link":"http://www.hatch.senate.gov"
  },
  {  
     "name":"Mike Lee",
     "party":"R",
     "state":"UT",
     "district":"Junior Seat",
     "phone":"202-224-5444",
     "office":"316 Hart Senate Office Building",
     "link":"http://www.lee.senate.gov"
  }
]