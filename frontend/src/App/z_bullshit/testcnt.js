import { connect } from 'react-redux'
import AppCpt from '../Components/AppCpt'
import {clickPlay} from '../Actions'

const mapStateToProps = (state) => ({
  play: state.nav.play
})
const mapDispatchToProps = (dispatch, state) => ({
  onClick: () => dispatch(clickPlay())
})

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppCpt)

export default App
