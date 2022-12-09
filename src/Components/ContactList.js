import React from "react";
import ContactItem from "./ContactItem";

import "./css/ContactList.css";

const ContactList = ({ contacts, count }) => {
  // To display serial number of contacts
  let countContacts = 1;

  // if no contacts added
  if (!contacts || contacts.length === 0) {
    return <h1>No Contacts To Show</h1>;
  }

  return (
    <div className="App-contact-list">
      <h2>Total Contacts {count} </h2>

      <div className="App-contact-list-table">
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
            {/* For each contact in contacts received as prop from parent function, show contact item */}

            {contacts.map((contact) => {
              return (
                <ContactItem
                  key={++countContacts}
                  contact={contact}
                  index={countContacts}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactList;
