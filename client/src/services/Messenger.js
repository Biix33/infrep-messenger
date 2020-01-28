import socketIO from "socket.io-client";

export default class Messenger {
  constructor(onMessageReceived, onUserChanged) {
    this.socket = socketIO("http://localhost:8000/");

    this.socket.on("new_message", message => {
      onMessageReceived(message);
    });

    this.socket.on("user_join", data => {
      onUserChanged(data);
    });

    this.socket.on("user_leave", onUserChanged);
  }

  /**
   * Send a new message to the server
   * @param {object} message
   */
  send(message) {
    this.socket.emit("new_message", message);
  }

  /**
   * Inform server that user connected
   * @param {String} username
   */
  join(username) {
    this.socket.emit("user_join", username);
  }

  leave(username) {
    this.socket.emit("user_leave", username);
  }
}
