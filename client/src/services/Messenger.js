import socketIO from "socket.io-client";

export default class Messenger {
  constructor(user) {
    this.socket = socketIO("http://localhost:8000");
    this.socket.emit("new_user", user);
  }

  /**
   * Send a new message to the server
   * @param {object} message
   */
  send = message => {
    this.socket.emit("new_message", message);
  };

  receive = onReceive => {
    this.socket.on("new_message", message => {
      onReceive(message);
    });
  };
}
