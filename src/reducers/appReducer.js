import { INCREMENTED_COUNTER } from '../constants'

const initialState = {
  counter: 0
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENTED_COUNTER:
      return { ...state, counter: action.payload.counter }
    default:
      return state
  }
}

export default appReducer
