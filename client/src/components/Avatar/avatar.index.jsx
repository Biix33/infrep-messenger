import React from "react";

export default class Avatar extends React.Component {
  render() {
    return (
      <div className="avatar">
        <img src="https://i.pravatar.cc/24" alt={this.props.user} />
      </div>
    );
  }
}
