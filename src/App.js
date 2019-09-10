import React, { useState } from 'react';
import './App.css';

import SelectionCard from '../src/components/SelectionCard'
import RepList from '../src/components/RepList'

function App() {

  const [congress, setCongress] = useState(null)
  const [selectedState, setSelectedState] = useState('')

  return (
    <div className="App">
        <SelectionCard 
          congress={congress} 
          setCongress={setCongress}
          selectedState={selectedState}
          setSelectedState={setSelectedState}
        />

        <RepList 
          congress={congress}
          selectedState={selectedState}
        />
    </div>
  );
}

export default App;
