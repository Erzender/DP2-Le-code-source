import { combineReducers } from 'redux'
import login from './login'
import persistency from './persistency'
import root from './root'

const rootReducer = combineReducers({
  login,
  persistency,
  root
})


export default rootReducer
