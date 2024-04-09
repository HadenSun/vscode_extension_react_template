import React, { useState } from 'react';
import { VSCodeButton, VSCodeTextArea } from '@vscode/webview-ui-toolkit/react';
import { vscode } from './utils/vscode';
import { 
  MessageFromWebview, 
  Message,
  COMMAND 
} from './models/message.model';
import './App.css';

function App() {

  window.addEventListener('message', handleMessage);

  const [message, setMessage] = useState('');

  function handleMessage(event: MessageEvent) {
    const message = event.data as Message;
    switch (message.command) {
      case COMMAND.testMessageFromExtension: 
        setMessage(message.data.message);
        return;
    }
  }
  return (
    <div className="App">
      <VSCodeTextArea placeholder='will show the received message' readOnly value={message}>
      </VSCodeTextArea>
      <br/>
      <VSCodeButton onClick={handleBtnClick}>
        Send Message To Extension
      </VSCodeButton>
    </div>
  );
}

function handleBtnClick() {
  const message: MessageFromWebview = {
    command: COMMAND.testMessageFromWebview,
    data: {
      message: "test message"
    },
  };
  vscode.postMessage(message);
}

export default App;
