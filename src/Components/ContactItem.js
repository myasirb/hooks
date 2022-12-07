import React from "react";

const ContactItem = ({contact, index}) => {
  return (
      <tr>
        <th scope="row">{index}</th>
        <td>{contact.name}</td>
        <td>
          <a rel="noreferrer" target="_blank" href={`tel:${contact.number}`}>{contact.number}</a>
        </td>
      </tr>
  );
};

export default ContactItem;
