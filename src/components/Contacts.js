import React, { Component } from "react";
import Contact from "./Contact";
export class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "arian",
        email: "a@h.com",
        phone: "049 433 333"
      },
      {
        id: 2,
        name: "maki",
        email: "a@h.com",
        phone: "049 433 333"
      },
      {
        id: 3,
        name: "baki",
        email: "a@h.com",
        phone: "049 433 333"
      }
    ]
  };

  render() {
    return this.state.contacts.map(contact => (
      <Contact key={contact.id} contact={contact} />
    ));
  }
}

export default Contacts;
