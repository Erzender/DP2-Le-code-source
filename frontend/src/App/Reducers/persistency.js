const initialState = {
  token: null,
  character:{
    name: '<inconnu>'
  }
}

const character = (state, action) => {
  return {
    ...state,
    name: action
  }
}

const persistency = (state = initialState, action) => {
  if (action.type === 'LOGIN') {
    switch (action.ref) {
      case 'SUCCEEDED':
        return {
          ...state,
          token: action.param
        }
      case 'INFO_SUCCEEDED':
        console.log('coucou')
        return {
          ...state,
          character: character(state.character, action.param)
        }
      default:
      return state
      }
    }
  if (action.type === 'NAVBAR') {
    switch (action.ref) {
      case 'DISCONNECT':
      return {
        ...state,
        token: initialState.token
      }
      default:
      return state
    }
  }
  return state
}

export default persistency
