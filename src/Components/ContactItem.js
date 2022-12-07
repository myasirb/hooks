import React from "react";

const ContactItem = ({contact}) => {
  return (
      <tr>
        <th scope="row">1</th>
        <td>{contact.name}</td>
        <td>
          <a target="_blank" href={`tel:${contact.number}`}>{contact.number}</a>
        </td>
      </tr>
  );
};

export default ContactItem;
