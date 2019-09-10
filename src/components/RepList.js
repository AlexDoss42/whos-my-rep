import React from 'react';

import RepTile from './RepTile'

const RepList = props => {

  return (
    <div>
      {results.map(rep => {
        return <RepTile 
                  key={rep.phone}
                  rep= {rep}  
                />
      })}
    </div>
  )
}

export default RepList


let results = [  
  {  
     "name":"Orrin Hatch",
     "party":"R",
     "state":"UT",
     "district":"Senior Seat",
     "phone":"202-224-5251",
     "office":"104 Hart Senate Office Building",
     "link":"http://www.hatch.senate.gov"
  },
  {  
     "name":"Mike Lee",
     "party":"R",
     "state":"UT",
     "district":"Junior Seat",
     "phone":"202-224-5444",
     "office":"316 Hart Senate Office Building",
     "link":"http://www.lee.senate.gov"
  }
]