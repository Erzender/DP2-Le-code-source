import { combineReducers } from 'redux'
import login from './login'
import persistency from './persistency'


const rootReducer = combineReducers({
  login,
  persistency
})


export default rootReducer
