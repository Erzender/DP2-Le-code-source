  import { connect } from 'react-redux'
import MapCpt from '../Components/MapCpt'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  MapButton: () => dispatch(Map('BUTTON'))
})

const Map = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapCpt)

export default Map
