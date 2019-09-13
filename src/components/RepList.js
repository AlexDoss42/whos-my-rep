import React from 'react';

import './repList.css'

import RepTile from './RepTile'

const RepList = props => {
 console.log(props.listOfReps)
  return (
    <div className="listCard">
      <h2>Your {props.congress} for {props.selectedState}</h2>
      
      
      <div className='repList'>
        {props.listOfReps.map(rep => {
        return <RepTile
        key={rep.phone}
        rep= {rep}
        congress={props.congress}
        />
        })}
      </div>
      <button onClick={props.resetHandler}>Reset</button>
    </div>
  )
}

export default RepList