import React from 'react'
import PropTypes from 'prop-types'
import {Button} from 'react-bootstrap'


class RegisterCpt extends React.Component {
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
    this.props.validate(this.state.value)
    event.preventDefault();
  }
  render(){
    return (
    <div style={lstyles.container}>
      <h1><font color='white'>S'incarner dans le Donjon</font></h1>
      <div style={lstyles.formContainer}>
      {!this.props.success && <form onSubmit={this.handleSubmit} style={lstyles.form}>
        <font color="white">Choisir un nom pour le personnage :</font>
        <input type="text" value={this.state.value[0]} onChange={this.handleChangeLogin} style={lstyles.input} />
        <font color="white">Définir un mot de passe de connexion :</font>
        <input type="password" value={this.state.value[1]} onChange={this.handleChangePassword} style={lstyles.input} />
        <font color="red">{this.props.error}</font>
        <Button type='submit' style={lstyles.button}>EN AVANT !</Button>
        <Button type='submit' style={lstyles.button} onClick={this.props.backButton}>En arrière p_o</Button>
      </form>}
      {this.props.success &&
        <div style={lstyles.form}>
        <h1><font color='white'>Compte créé !</font></h1>
        <Button type='submit' style={lstyles.button} onClick={this.props.backButton}>Retour à la connexion</Button>
        </div>
      }
      </div>
    </div>
    )}
}

RegisterCpt.proptypes = {
  backButton: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired
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
    marginTop:100,
    marginBottom:200
  },
  form : {
    display : 'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  },
  input : {
    marginBottom: 30,
    marginTop:10,
    width:200,
    textAlign:'center'
  },
  button: {
    marginTop: 10,
    width:200,
    minHeight:40,
  }
}

export default RegisterCpt;
