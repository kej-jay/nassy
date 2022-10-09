import React, { useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";

const WebSocketConnect = ({updatePupilSizes}) => {
    const [isDisabled, setIsDisabled] = useState(false);

    const createConnection = () => {
        const client = new W3CWebSocket('ws://localhost:1113/websocket/');
        client.onopen = () => {
            alert('WebSocket Client Successfully Connected');
            setIsDisabled(true);
        };
        client.onmessage = (message) => {
            if (message.data) {
                console.log(message);
                let data = JSON.parse(message.data);
                updatePupilSizes(data.diameter.left, data.diameter.right);
            }
        };
    }

    return (
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
            <button
                disabled={isDisabled}
                onClick={() => createConnection()}
            >
                Connect to WebSocket
            </button>
        </div>
    );
  };

export default WebSocketConnect;