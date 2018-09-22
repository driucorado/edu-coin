import {REGISTER_NEW_USER} from '../types'

const initialState = {
  isConnected : false,
  user: {}
}

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_NEW_USER:
      return {...state}
    default:
      return state
  }
}
