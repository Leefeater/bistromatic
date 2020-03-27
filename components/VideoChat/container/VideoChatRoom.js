import {connect} from 'react-redux';
import { VideoChatRoom } from '../components/VideoChatRoom';
import { Actions } from "@andyet/simplewebrtc";

const mapStateToProps = (state /*, ownProps*/) => {
    console.log(state)
    return {
        calls: state.calls
    }
  }
  console.log(Actions)
const mapDispatchToProps = () => {
    getMediaTrack:Actions.getMediaTrack()
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoChatRoom)
