import React from 'react';
import './SelectionCard.css'

const SelectionCard = props => {

  return(
      <div className="SelectionCard">
          <h2>Senators or Representatives?</h2>
          <div className='buttonContainer'>
            <button 
              onClick={props.setCongress('senators')}
            >Senators</button>
            <button 
              onClick={props.setCongress('representatives')}
            >Representatives</button>
          </div>
          <h2>Which state do you live in?</h2>

          <form onSubmit={props.setSelectedState()}>
            <input type='text' value={props.selectedState} onChange={e => props.setSelectedState(e.target.value)}  placeholder="Ex: TX"  maxLength="2" minLength="2" required />
            <button>Find Your Rep</button>
          </form>
      </div>
  )
}

export default SelectionCard