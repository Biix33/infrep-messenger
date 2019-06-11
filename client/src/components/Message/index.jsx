import React from "react";
import "./styles.css";
import Avatar from "../Avatar/avatar.index";

function Message(props) {
  const { author, children, self } = props;
  const classMe = "message-self";
  return (
    <div className={self ? classMe : "message-other"}>
      <div className="author">
        <div className="avatar">
          <Avatar />
        </div>
        <div>
          <small>{author}</small>
        </div>
      </div>
      <div className="message-content">{children}</div>
    </div>
  );
}

export default Message;
