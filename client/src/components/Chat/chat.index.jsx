import React from "react";
import "./chat.design.css";

import List from "../Message/List";
import Navbar from "../Navbar/navbar.index";
import Form from "../Form/form.index";

import Messenger from "../../services/Messenger";
import UsersInfo from "../UsersInfo/UsersInfo";
import { UserMenu } from "../UsersInfo/UserMenu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

export default class Chat extends React.Component {
  state = {
    messages: [],
    usersCount: 0,
    newUserConnected: false,
    displayUserMenu: false
  };

  displayUserMenu = event => {
    event.preventDefault();
    if (this.state.displayUserMenu) {
      this.setState({ displayUserMenu: false });
    } else {
      this.setState({ displayUserMenu: true });
    }
  };

  componentDidMount() {
    // connect to socket server
    this.messenger = new Messenger(this.addMessage, this.updateUsers);
    this.messenger.join(this.props.currentUser);
  }

  componentDidUpdate() {
    setTimeout(() => this.setState({ newUserConnected: false }), 8000);
  }

  addMessage = newMessage => {
    const newList = [...this.state.messages, newMessage];
    this.setState({ messages: newList });
  };

  updateUsers = data => {
    const { user, count } = data;

    this.setState({
      usersCount: count,
      newUserConnected: user
    });
  };

  handleSubmit = content => {
    const newMessage = {
      content: content,
      author: this.props.currentUser
    };

    // Envoi message au serveur
    this.messenger.send(newMessage);
    this.addMessage(newMessage);
  };

  render() {
    const {
      usersCount,
      messages,
      newUserConnected,
      displayUserMenu
    } = this.state;
    const { currentUser } = this.props;
    const navItems = [
      {
        name: (
          <div className="user__count">
            <FontAwesomeIcon icon={faUsers} />
            <span>{usersCount}</span>
          </div>
        ),
        link: "/",
        onclick: ""
      },
      {
        name: <UsersInfo user={currentUser} usersCount={usersCount} />,
        link: "/",
        onClick: this.displayUserMenu
      }
    ];
    return (
      <div id="chat-container">
        <Navbar navLinks={navItems} />
        <div className="scroller">
          {newUserConnected && currentUser.email !== newUserConnected.email && (
            <div className="user__connected">
              {newUserConnected.username} vient de se connecter
            </div>
          )}
          {displayUserMenu && <UserMenu />}
          <List currentUser={currentUser} messages={messages} />
        </div>
        <section id="form-message">
          <Form onSend={this.handleSubmit} />
        </section>
      </div>
    );
  }
}
