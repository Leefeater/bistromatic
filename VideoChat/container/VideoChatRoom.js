import {connect} from 'react-redux';
import { VideoChatRoom } from '../components/VideoChatRoom';

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        calls: state.calls
    }
  }

export default connect(
    mapStateToProps
)(VideoChatRoom)