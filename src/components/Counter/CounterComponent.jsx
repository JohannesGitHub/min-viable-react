import React from 'react'

const CounterComponent = props => {
  return (
    <div className="counter">
      <div>{props.counter}</div>
    </div>
  )
}

export default CounterComponent
