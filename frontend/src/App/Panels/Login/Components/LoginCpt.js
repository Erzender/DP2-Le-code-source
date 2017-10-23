import React from 'react'
import PropTypes from 'prop-types'
import {Button} from 'react-bootstrap'


class LoginCpt extends React.Component {
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
    <div style={lstyles.container}>
      <h1><font color='white'>Donjon & Parpaings</font></h1>
      <h2><font color='white'>Edition en Travaux</font></h2>
      <div style={lstyles.formContainer}>
      <form onSubmit={this.handleSubmit} style={lstyles.form}>
        <font color="white">Personnage</font>
        <input type="text" value={this.state.value[0]} onChange={this.handleChangeLogin} style={lstyles.input} />
        <font color="white">Mot de passe</font>
        <input type="password" value={this.state.value[1]} onChange={this.handleChangePassword} style={lstyles.input} />
        <font color="red">{this.props.loading?"En attente du serveur...":this.props.error}</font>
        <div style={lstyles.button}>
          <Button type='submit' style={lstyles.button}>Connexion</Button>
          <Button style={lstyles.button} onClick={this.props.registerButton}>Inscription</Button>
        </div>
      </form>
      </div>
    </div>
    )}
}

LoginCpt.proptypes = {
  loginButton: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  registerButton: PropTypes.func.isRequired
}

const lstyles = {
  container: {
    display : 'flex',
    flexDirection:'column',
    overflow: 'auto',
    position: 'absolute',
    top:0, left:0, right:0, bottom: 0,
    backgroundColor:'black',
    alignItems:'center'
  },
  formContainer: {
    display : 'flex',
    flex:1,
    marginTop:150,
    marginBottom:200
  },
  form : {
    display : 'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  },
  input : {
    marginBottom: 20,
    marginTop:10,
    width:200,
    textAlign:'center'
  },
  button: {
    marginTop: 20,
    width:200,
    minHeight:40,
  }
}

export default LoginCpt;
