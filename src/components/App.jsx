import React from 'react'

import Button from './Button'
import Counter from './Counter'

const App = () => {
  return(
    <div className="field">
      <div className="headline">
        <h1>min-viable-react</h1>
      </div>
      <Counter/>
      <Button/>
    </div>
  )
}

export default App