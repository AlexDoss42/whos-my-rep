import React from 'react';

import './repList.css'

import RepTile from './RepTile'

const RepList = props => {

  return (
    <div className="listCard">
      <h2>Your {props.congress} for {props.selectedState}</h2>
      
      
      <ul className='repList'>
        {props.listOfReps.map(rep => {
        return <RepTile
        key={rep.phone}
        rep= {rep}
        />
        })}
      </ul>
    </div>
  )
}

export default RepList