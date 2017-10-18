const initialState = {
  play: false
}

const nav = (state = initialState, action) => {
  switch (action.type) {
    case 'NAVBAR':
      switch (action.ref) {
        case 'DISCONNECT'
        return state,
      }
    default:
    return state
  }
}

export default nav
