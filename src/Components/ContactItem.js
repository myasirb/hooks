import React, { useContext } from "react";
import { ContactContext } from "../context/ContactContext";

const ContactItem = ({contact, index}) => {
  const contacts = useContext(ContactContext);
  const deleteContactHandler = (e) =>{
    e.preventDefault();

    contacts.pop(contact);

  }
  return (
      <tr>
        <th scope="row">{index}</th>
        <td>{contact.name}</td>
        <td>
          <a rel="noreferrer" className="btn btn-link" target="_blank" href={`tel:${contact.number}`}>{contact.number}</a>
        </td>
        <td>
          <button className="btn btn-danger" onClick={deleteContactHandler}>Delete</button>
        </td>
      </tr>
  );
};

export default ContactItem;
