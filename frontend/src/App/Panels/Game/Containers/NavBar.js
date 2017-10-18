import { connect } from 'react-redux'
import NavBarCpt from '../Components/NavBarCpt'
import {navbar} from '../../../Actions'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  onDisconnect: () => dispatch(navbar('DISCONNECT'))
})

const NavBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBarCpt)

export default NavBar
