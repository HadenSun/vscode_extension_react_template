export enum COMMAND {
  testMessageFromWebview = 'TEST_MESSAGE',
  testMessageFromExtension = 'TEST_MESSAGE'
}

export type Message = {
  command: string;
  data: any;
};

// extends Message
export type MessageFromWebview = Message & {
  command: COMMAND.testMessageFromWebview;
  data: {
    message: string;
  };
};

  