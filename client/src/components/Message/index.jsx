import React from "react";
import "./styles.css";
import Avatar from "../Avatar/avatar.index";

function Message(props) {
  const { author, children, self, me } = props;
  const classMe = "self";
  return (
    <div className={self ? classMe : ""}>
      <div className="author">
        <div className="avatar">{!me ? <Avatar /> : ""}</div>
      </div>
      <div className="message">{children}</div>
    </div>
  );
}

export default Message;
