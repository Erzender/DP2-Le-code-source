import { connect } from 'react-redux'
import LoginRootCpt from '../Components/LoginRootCpt'

const mapStateToProps = (state) => ({
  page: state.login.page
})

const mapDispatchToProps = (dispatch) => ({
})

const LoginRoot = connect(
mapStateToProps,
mapDispatchToProps
)(LoginRootCpt)

export default LoginRoot
