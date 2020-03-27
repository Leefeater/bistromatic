import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import * as SWRTC from '@andyet/simplewebrtc';
import VideoChatRoom from './container/VideoChatRoom'

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
const CONFIG_URL = `https://api.simplewebrtc.com/config/guest/${API_KEY}`;

const store = SWRTC.createStore();

export const VideoChatInitiator =  () => {
    
return (
    
<Provider store={store}>
    <SWRTC.Provider configUrl={CONFIG_URL}>
      {/* Render based on the connection state */}
      <SWRTC.Connecting>
        <h1>Connecting...</h1>
      </SWRTC.Connecting>

      <SWRTC.Connected>
        <h1>Connected!</h1>
        {/* Request the user's media */}
        <SWRTC.RequestUserMedia audio video auto />

        {/* Enable playing remote audio. */}
        <SWRTC.RemoteAudioPlayer />

        {/* Connect to a room with a name and optional password */}
        <SWRTC.Room name={ROOM_NAME} password={ROOM_PASSWORD}>
          {props => {
              return (
                <VideoChatRoom/>
              )
            /* Use the rest of the SWRTC React Components to render your UI */
          }}
        </SWRTC.Room>
      </SWRTC.Connected>
    </SWRTC.Provider>
  </Provider>

)}
export default VideoChatInitiator