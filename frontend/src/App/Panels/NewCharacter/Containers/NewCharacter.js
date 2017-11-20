import { connect } from 'react-redux'
import NewCharacterCpt from '../Components/NewCharacterCpt'
import {navbar} from '../../../Actions'


const mapStateToProps = (state) => ({
  name: state.persistency.character.name
})

const mapDispatchToProps = (dispatch) => ({
  onDisconnect: () => dispatch(navbar('DISCONNECT'))
})

const NewCharacter = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCharacterCpt)

export default NewCharacter
