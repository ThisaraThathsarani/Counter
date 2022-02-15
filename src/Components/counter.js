import React from 'react'

function Counter(props) {

  return (
    <div className="counter">
      <h1>Counter: {props.count}</h1>
    </div>
  )
}

export default Counter;