import { connect } from 'react-redux'
import TimerCpt from '../Components/TimerCpt'
import {root, fetchInfo} from '../Actions'

const mapStateToProps = (state) => ({
  time: state.root.timer,
  token: state.persistency.token
})

const mapDispatchToProps = (dispatch, state) => ({
  update: (time, token) => {
    dispatch(root('TIMER_UPDATE'), time)
    if ((time < 0 || time >= 60) && token !== null)
    {
      dispatch(fetchInfo(token))
      dispatch(root('TIMER_RESET'))
    }
  }
})

const Timer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TimerCpt)

export default Timer
