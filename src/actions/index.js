import store from '../stores'

import { INCREMENTED_COUNTER } from '../constants'

function incrementedCounter(results) {
  return {
    type: INCREMENTED_COUNTER,
    payload: results
  }
}

export const incrementCounter = () => dispatch => {

  dispatch(incrementedCounter({ counter: store.getState().app.counter + 1 }))
}
