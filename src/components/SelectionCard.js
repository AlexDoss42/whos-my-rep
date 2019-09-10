import React from 'react';

const SelectionCard = props => {

  return(
      <div>
          <h2>Senators or Representatives?</h2>
          <div>
            <button>Senator</button>
            <button>Representative</button>
          </div>
          <h2>Which state do you live in?</h2>
          <input type='text' placeholder="Ex: TX"  maxLength="2" minLength="2" required />
          <button>Find Your Rep</button>
      </div>
  )
}

export default SelectionCard