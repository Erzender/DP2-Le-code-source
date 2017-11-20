const initialState = {
  token: null,
  character:{
    loaded: false,
    name: '<inconnu>'
  }
}

const character = (state, action) => {
  return {
    ...state,
    name: action.name
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
        if (action.param.noCharacter){
          return {
            ...state,
            character: initialState.character
          }
        }
        return {
          ...state,
          character: character(state.character, action.param)
        }
        case 'INFO_FAILED':
          return initialState
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
