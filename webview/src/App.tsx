import React from 'react';
import { VSCodeButton } from '@vscode/webview-ui-toolkit/react';
import { vscode } from './utils/vscode';
import { 
  MessageFromWebview, 
  COMMAND 
} from './models/message.model';
import './App.css';

function App() {
  return (
    <div className="App">
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
