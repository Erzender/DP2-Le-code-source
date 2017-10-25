const initialState = {
  isFetching: false,
  didInvalidate: false,
  page: "login",
  error: "",
  success: false
}

const login = (state = initialState, action) => {
  if (action.type === 'LOGIN') {
      switch (action.ref) {
      case 'REQUESTED':
        return {
          ...state,
          isFetching: true,
          error: "",
        }
      case 'SUCCEEDED':
        return {
          ...state,
          isFetching: false,
          didInvalidate: false,
        }
      case 'FAILED':
        return {
          ...state,
          isFetching: false,
          didInvalidate: true,
          error: action.param?("Serveur : " + action.param):""
        }
      case 'REGISTER_PAGE':
        return {
          ...state,
          page: 'register'
        }
      case 'REGISTER_BACK':
        return initialState
      case 'REG_REQUESTED':
        return {
          ...state,
          isFetching: true,
        }
      case 'REG_FAILED':
        return {
          ...state,
          isFetching: false,
          didInvalidate: true,
          error: action.param?("Serveur : " + action.param):""
        }
      case 'REG_SUCCEEDED':
        return {
          ...state,
          isFetching: false,
          didInvalidate: false,
          success: true
        }
      default:
      return state
     }
  }
  return state
}

export default login
