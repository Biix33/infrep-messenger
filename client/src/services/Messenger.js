import socketIO from "socket.io-client";

export default class Messenger {
  constructor(onReceive) {
    this.socket = socketIO("http://localhost:8000");
    this.socket.on("new_message", message => {
      onReceive(message);
    });
  }

  /**
   * Send a new message to the server
   * @param {object} message
   */
  send = message => {
    this.socket.emit("new_message", message);
    console.log("FAKE SEND");
  };
}
