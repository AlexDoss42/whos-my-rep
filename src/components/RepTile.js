import React, { useState } from 'react';

const RepTile = props => {

  const [ repDetails, setRepDetails ] = useState(false)

  const showDetailsHandler = () => {
    setRepDetails(!repDetails)
    console.log('You should now see all the details of the rep', repDetails)
  }

  return (
    <div>
      <h3 onClick={showDetailsHandler}>{props.rep.name}</h3>
      <h3>{props.rep.party}</h3>
    </div>
  )
}

export default RepTile