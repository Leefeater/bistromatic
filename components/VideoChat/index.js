import {Provider} from 'react-redux';
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import * as SWRTC from '@andyet/simplewebrtc';
import VideoChatRoom from './container/VideoChatRoom'
import axios from 'axios';
import PeersGrid from "./container/PeersGrid";

// ====================================================================
// IMPORTANT SETUP
// ====================================================================
// Replace `YOUR_API_KEY` here with the API key you received when
// signing up for SimpleWebRTC
// --------------------------------------------------------------------
const API_KEY = 'f7630107bd76dbb1ed176b4f';
// ====================================================================

const ROOM_NAME = 'YOUR_ROOM_NAME';
const ROOM_PASSWORD = 'abc';
const CONFIG_URL = `https://api.simplewebrtc.com/config/user/${API_KEY}`;

const store = SWRTC.createStore();
let FETCHED = false;

export const VideoChatInitiator = () => {

    let [token, updateToken] = useState('');

    useEffect(() => {
        axios.get('/api/get-user-data').then(function (response) {
            updateToken(response.data.userDataToken)
            FETCHED = true;
            setTimeout(() => axios.get('api/validate-user-data', {headers: {token: response.data.userDataToken}}), 100)
        })
    }, [FETCHED])


    return (
        <>

            {token ?

                <Provider store={store}>
                    <SWRTC.Provider configUrl={CONFIG_URL} userData={token}>
                        {/* Render based on the connection state */}
                        <SWRTC.Connecting>
                            <h1>Connecting...</h1>
                        </SWRTC.Connecting>

                        <SWRTC.Connected>
                            <h1>Connected!</h1>
                            {/* Request the user's media */}
                            <SWRTC.RequestUserMedia audio video={true} auto/>



                            {/* Enable playing remote audio. */}
                            <SWRTC.RemoteAudioPlayer/>

                            {/* Connect to a room with a name and optional password */}
                            <SWRTC.Room name={ROOM_NAME} password={ROOM_PASSWORD}>
                                {({room, peers})=> {
                                    return (<>
                                            {/*<VideoChatRoom/>*/}
                                            <PeersGrid peers={peers} roomAddress={room.address} />
                                        </>
                                    )

                                    /* Use the rest of the SWRTC React Components to render your UI */
                                }}
                            </SWRTC.Room>
                        </SWRTC.Connected>
                    </SWRTC.Provider>
                </Provider> : "fetching data"}
        </>

    )
}
export default VideoChatInitiator


