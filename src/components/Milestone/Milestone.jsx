import React from 'react'
import './Milestone.css';

const Milestone = ({i}) => {

  return (
    <div className="milestone__container">
      <button className="btn__milestone">{`Milestone ${i}`}</button>
      <input className="input__field" type="text" placeholder='33.33'/>
      <input className="input__field" type="text" placeholder='33.33%'/>
      <input className="input__field" type="date" placeholder='ddmmyyyy'/>
    </div>
  )
}

export default Milestone;