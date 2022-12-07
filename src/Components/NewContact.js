import React, { useEffect, useState } from "react";
import "./css/NewContact.css";

const NewContact = () => {
  const [list, setList] = useState([]);

  const newContactSubmitHandler = (e) => {
    e.preventDefault();

    const newContact = {
      name: e.target.name.value,
      contact: e.target.contact.value,
    };

    setList((prevListItem) => {
      return prevListItem.concat(newContact);
    });
  };

  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <div className="App-new-contact">
      <form className="App-new-contact-form" onSubmit={newContactSubmitHandler}>
        <div className="mb-3">
          <label>Name</label>
          <input type="text" className="form-control" name="name" />
        </div>
        <div className="mb-3">
          <label>Number</label>
          <input type="number" className="form-control" name="contact" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewContact;
