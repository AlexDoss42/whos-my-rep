import React, { useState } from 'react';
import './App.css';

import SelectionCard from '../src/components/SelectionCard'
import RepList from '../src/components/RepList'

function App() {

  const [congress, setCongress] = useState(null)
  const [selectedState, setSelectedState] = useState(null)

  return (
    <div className="App">
        <h1>This is the who's my rep page</h1>
        <SelectionCard 
          congress={congress} 
          setCongress={setCongress}
          selectedState={selectedState}
          setSelectedState={setSelectedState}
        />
        <RepList />
    </div>
  );
}

export default App;
