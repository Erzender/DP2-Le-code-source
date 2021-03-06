import { connect } from 'react-redux'
import RootCpt from '../Components/RootCpt'

const mapStateToProps = (state) => ({
  loggedIn: state.persistency.token !== null
})

const mapDispatchToProps = (dispatch, state) => ({
})

const Root = connect(
  mapStateToProps,
  mapDispatchToProps
)(RootCpt)

export default Root
