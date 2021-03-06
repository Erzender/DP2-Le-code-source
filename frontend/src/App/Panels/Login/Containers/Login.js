  import { connect } from 'react-redux'
import LoginCpt from '../Components/LoginCpt'
import {fetchLogin, login} from '../../../Actions'

const mapStateToProps = (state) => ({
  loading: state.login.isFetching,
  error: state.login.didInvalidate?"La connexion a échoué.":null
})

const mapDispatchToProps = (dispatch) => ({
  loginButton: (value) => {
    console.log('hey')
    dispatch(fetchLogin(value))
  },
  registerButton: () => dispatch(login('REGISTER_PAGE'))
})

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginCpt)

export default Login
