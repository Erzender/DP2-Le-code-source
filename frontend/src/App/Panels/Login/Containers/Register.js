import { connect } from 'react-redux'
import RegisterCpt from '../Components/RegisterCpt'
import {login, fetchRegister} from '../../../Actions'

const mapStateToProps = (state) => ({
  loading: state.login.isFetching,
  error: state.login.error,
  success: state.login.success
})

const mapDispatchToProps = (dispatch) => ({
  backButton: () => dispatch(login('REGISTER_BACK')),
  validate: (value) => dispatch(fetchRegister(value))
})

const Register = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterCpt)

export default Register
