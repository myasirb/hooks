import React, { useEffect, useState } from "react";
import "./css/NewContact.css";

const NewContact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const newContactSubmitHandler = (e) => {
    e.preventDefault();

    const newContact = {
      name,
      number,
    };

    console.log(newContact);
  };

  const onNameChangeHandler = (e) => {
    e.preventDefault();

    setName(e.target.value);
  };

  const onNumberChangeHandler = (e) => {
    e.preventDefault();

    setNumber(e.target.value);
  };

  return (
    <div className="App-new-contact">
      <form className="App-new-contact-form" onSubmit={newContactSubmitHandler}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={onNameChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label>Number</label>
          <input
            type="number"
            className="form-control"
            name="number"
            onChange={onNumberChangeHandler}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewContact;
