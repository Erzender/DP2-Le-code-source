
const initialState = {
  timer : -30
}


const login = (state = initialState, action) => {
  if (action.type === 'ROOT') {
      switch (action.ref) {
        case 'TIMER_UPDATE':
        return {
          ...state,
          timer: state.timer + 1
        }
        case 'TIMER_RESET':
        return {
          ...state,
          timer: 0
        }
      default:
      return state
     }
  }
  return state
}

export default login
