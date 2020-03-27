import { PeerList, RemoteMediaList,  Video } from '@andyet/simplewebrtc';
import React from "react";

export const PeersGrid = ({roomAddress}) => {
console.log(roomAddress)
    return(
        <PeerList
            room={roomAddress}
            render={({ peers }) =>

                peers.map(peer => {

                    // The content of `peer.customerData` is the data
                    // from the token used by that peer.
                    return (
                        <div>
                            <p>media terrorists</p>
                            <RemoteMediaList
                                peer={peer.address}
                                render={({ media }) => {
                                    console.log(media, 'media')
                                    return (
                                        <>
                                            a hole in the sky

                                            <Video media={media[1]}/>
                                        </>
                                    )
                                }}
                            />
                        </div>
                    );
                })
            }
        />
    )

};
