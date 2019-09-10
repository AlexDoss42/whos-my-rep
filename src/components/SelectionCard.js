import React from 'react';

const SelectionCard = props => {

  return(
      <div>
          <h2>Senators or Representatives?</h2>
          <div>
            <button onClick={props.setCongress('senator')}>Senator</button>
            <button onClick={props.setCongress('representative')}>Representative</button>
          </div>
          <h2>Which state do you live in?</h2>
          <input type='text' value={props.selectedState} onChange={props.setSelectedState()} placeholder="Ex: TX"  maxLength="2" minLength="2" required />
          <button>Find Your Rep</button>
      </div>
  )
}

export default SelectionCard