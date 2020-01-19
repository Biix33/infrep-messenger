import React from "react";
import "./styles.css";
import { Avatar } from "../Avatar/avatar.index";

function Message(props) {
  const { children, self, me } = props;
  const classMe = "self";
  return (
    <div className={self ? classMe : ""}>
      <div className="author">
        {!me ? <Avatar /> : ""}
        <div className="message">{children}</div>
      </div>
    </div>
  );
}

export default Message;
