import React from 'react'

import './App.css'
import Milestone from './Milestone/Milestone';

const App = () => {

  return (
    <div className='root'>
      <main className='content'>
        <h1>Transaction Milestone</h1>
        <form>
          <div className='sublayout'>
            <div className='subcontent'>
              <label for="milestone">
                <p>Number of Milestone</p>
              </label>
              <input className='input__field' type="text" id='milestone' placeholder='3' />
            </div>
            <Milestone i={1} />
            <Milestone i={2} />
            <Milestone i={3} />
            <hr />
            <div className='total__payment'>
              <label for='payment'>
                <p>Total Payment Amount</p>
              </label>
              <input className='input__field' type="text" placeholder='100' />
              <input className='input__field' type="text" placeholder='100%' />
            </div>
            <div className='btn__controller'>
              <button className='btn'>Back</button>
              <button className='btn'>Next</button>
            </div>
          </div>
        </form>
      </main>
    </div>
  )
}

export default App;