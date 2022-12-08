import React from "react";
import ContactItem from "./ContactItem";

const ContactList = ({ contacts }) => {

  let countContacts = 1;

  if (!contacts || contacts.length === 0) {
    return <h1>No Contacts To Show</h1>;
  }

  return (
    <div className="App-contact-list">
      <h2>All Contacts</h2>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Sr Number</th>
            <th scope="col">Name</th>
            <th scope="col">Contact Number</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact) => {
            return <ContactItem key={++countContacts} contact={contact} index = {countContacts} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
