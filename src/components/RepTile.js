import React, { useState } from 'react';

import './repTile.css'

const RepTile = props => {

  const [ repDetails, setRepDetails ] = useState(false)

  const showDetailsHandler = () => {
    setRepDetails(!repDetails)
    console.log('You should now see all the details of the rep', repDetails)
  }

  return (
    <li className="repContainer">
      <div className="headerContent">
        <h3 className='repName' onClick={showDetailsHandler}>{props.rep.name}</h3>
        <h3>Party: {props.rep.party}</h3>
      </div>
      <div className='moreDetails'>
        <h4>District: {props.rep.district}</h4>
        <h4>Phone: {props.rep.phone}</h4>
        <h4>Office: {props.rep.office}</h4>
        <h4>Website: <a href={props.rep.link} target='_blank' rel="noopener noreferrer">{props.rep.link}</a></h4>
      </div>
    </li>
  )
}

export default RepTile