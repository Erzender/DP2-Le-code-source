import React from 'react'
import PropTypes from 'prop-types'
import Login from '../Containers/Login'
import Register from '../Containers/Register'


class LoginRootCpt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ['', '']};
    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeLogin(event) {
    this.setState({value: [event.target.value, this.state.value[1]]});
  }
  handleChangePassword(event) {
    this.setState({value: [this.state.value[0], event.target.value]});
  }
  handleSubmit(event) {
    this.props.loginButton(this.state.value)
    event.preventDefault();
  }
  render(){
    return (
    <div>
      {this.props.page === 'login' && <Login />}
      {this.props.page === 'register' && <Register />}
    </div>
    )}
}

LoginRootCpt.proptypes = {
  page: PropTypes.string.isRequired
}


export default LoginRootCpt;
