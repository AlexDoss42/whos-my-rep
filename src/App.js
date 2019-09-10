import React from 'react';
import './App.css';

import SelectionCard from '../src/components/SelectionCard'
import RepList from '../src/components/RepList'

function App() {
  return (
    <div className="App">
        <h1>This is the who's my rep page</h1>
        <SelectionCard />
        <RepList />
    </div>
  );
}

export default App;
