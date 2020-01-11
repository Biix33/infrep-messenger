import React from "react";

export default class NavItems extends React.Component {
  render() {
    return (
      <div className="nav-items">
        {this.props.items.map((item, i) => {
          return (
            <a
              key={i}
              href={item.link}
              className="nav-link"
              onClick={item.onClick}
            >
              {item.name}
            </a>
          );
        })}
      </div>
    );
  }
}
