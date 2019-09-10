import React from 'react';

const RepTile = props => {
  return (
    <div>
      <h3>{props.rep.name}</h3>
      <h3>{props.rep.party}</h3>
    </div>
  )
}

export default RepTile