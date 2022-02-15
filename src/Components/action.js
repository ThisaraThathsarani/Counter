import React, { useState } from 'react'
import Counter from './counter';

function Action() {
  const [count, setCount] = useState(0);

  return (
    <div className="action_main">
      <div className="main">
        <div className='action'>
          <Counter count={count}></Counter></div>
        <div class="container">
          <div class="row">
            <div class="col-3 col-sm-3">
              <button  
                style={{ width: 50, height: 50 }} 
                class="btn "
                onClick={() => setCount(count + 1)}>+
              </button>
            </div>
            <div class="col-3 col-sm-3">
              <button 
                style={{ width: 50, height: 50 }} 
                class="btn "
                onClick={() => setCount(count - 1)}>-
              </button> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Action;

{/* <div class="container">
                <div class="row justify-content-evenly">
                    <div class="col-4">
                        <button class="btn plus" 
                        onClick={() => setCount(count + 1)}>+</button>
                    </div>
                    <div class="col-4">
                        <button class="btn  minus"
                        onClick={() => setCount(count - 1)}>-</button>
                    </div>
                </div>
            </div> */}