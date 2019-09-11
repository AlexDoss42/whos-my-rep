import React from 'react';
import './SelectionCard.css'
import Axios from 'axios';

const SelectionCard = props => {

  let { congress, setCongress, selectedState, setSelectedState } = props

const submitHandler = (e, congress, selectedState) => {
  e.preventDefault()
  if(congress === null) {
    alert('make sure to pick senators or representatives')
  } else if(congress === 'senators') {
      console.log('You are asking for the senators in', selectedState)
      // Axios.get(`/senators/${props.selectedState}`)
  } else if(props.congress === 'representatives') {
      console.log('you are asking for the ', congress, ' in ', selectedState)
      // Axios.get(`/representatives/${props.selectedState}`)
  } else 
  console.log('error in your submitHandler')
}

  return(
      <div className="SelectionCard">
          <h2>Senators or Representatives?</h2>
        <form>
          <select id='SenRep'>
            <option>Senate</option>
            <option>Representatives</option>
          </select>

          {/* <div className='buttonContainer'>
            <button 
              onClick={props.setCongress('senators')}
            >Senators</button>
            <button 
              onClick={props.setCongress('representatives')}
            >Representatives</button>
          </div> */}
          <h2>Which state do you live in?</h2>


          <label for="state">State</label>
			<select id="state" name="state">
        <option value="---">---</option>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VAa">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
      </select>


          {/* <form onSubmit={submitHandler}>
            <input 
              type='text' 
              value={props.selectedState} 
              onChange={e => props.setSelectedState(e.target.value)}  
              placeholder="Ex: TX"  
              maxLength="2" 
              minLength="2" 
              required
            /> */}
            <button>Find Your Rep</button>
          </form>
      </div>
  )
}

export default SelectionCard