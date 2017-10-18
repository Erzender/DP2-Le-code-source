import { connect } from 'react-redux'
import CharacterCpt from '../Components/CharacterCpt'

const mapStateToProps = (state) => ({
  name: state.persistency.character.name
})

const mapDispatchToProps = (dispatch) => ({
})

const Character = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterCpt)

export default Character
