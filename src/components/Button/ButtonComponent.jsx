import React from 'react'

const ButtonComponent = props => {
  return (
    <div className="button" onClick={() => props.onSubmit()}>
      <div>submit</div>
    </div>
  )
}

export default ButtonComponent
