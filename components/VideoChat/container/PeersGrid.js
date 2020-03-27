import {connect} from 'react-redux';
import  {Actions} from "@andyet/simplewebrtc";
import {PeersGrid} from "../components/PeersGrid";

const mapStateToProps = (state /*, ownProps*/) => {
    console.log(state)
    return {
        calls: state.calls
    }
}
console.log(Actions)
const mapDispatchToProps = () => {
    return{
        getMediaTrack:Actions.getMediaTrack
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PeersGrid)
