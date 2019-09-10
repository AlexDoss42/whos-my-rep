import React from 'react';
import './SelectionCard.css'

const SelectionCard = props => {

  return(
      <div className="SelectionCard">
          <h2>Senators or Representatives?</h2>
          <div className='buttonContainer'>
            <button 
              onClick={props.setCongress('senator')}
            >Senators</button>
            <button 
              onClick={props.setCongress('representative')}
            >Representatives</button>
          </div>
          <h2>Which state do you live in?</h2>
          <input type='text' value={props.selectedState} onChange={props.setSelectedState()} placeholder="Ex: TX"  maxLength="2" minLength="2" required />
          <button>Find Your Rep</button>
      </div>
  )
}

export default SelectionCard