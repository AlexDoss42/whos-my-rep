import React, { useState } from 'react';
import './App.css';

import SelectionCard from '../src/components/SelectionCard'
import RepList from '../src/components/RepList'

function App() {

  const [congress, setCongress] = useState(null)
  const [selectedState, setSelectedState] = useState('')

  let content = 
      <SelectionCard 
        congress={congress} 
        setCongress={setCongress}
        selectedState={selectedState}
        setSelectedState={setSelectedState}
      />

if(selectedState){
       content = <RepList 
          congress={congress}
          selectedState={selectedState}
        />
}

  return (
    <div className="App">
        {content}
    </div>
  );
}

export default App;