import React, { useContext, useEffect, useState } from "react";
import { ContactContext } from "../context/ContactContext";

import "./css/NewContact.css";

const NewContact = () => {
  // use context to get access to contact context methods
  const contact = useContext(ContactContext);

  const [name, setName] = useState(""); // input name state
  const [number, setNumber] = useState(""); // input number state
  const [errorText, setErrorText] = useState(""); // error message state
  const [formIsValid, setFormIsValid] = useState(false); // form validity state

  // form submit handler
  const newContactSubmitHandler = (e) => {
    e.preventDefault();

    // create a new contact
    const newContact = {
      name,
      number,
    };

    // push it to context list
    contact.push(newContact);

    // reset form
    setName("");
    setNumber("");
  };

  // update name state
  const onNameChangeHandler = (e) => {
    e.preventDefault();

    setName(e.target.value);
  };

  // update number state
  const onNumberChangeHandler = (e) => {
    e.preventDefault();

    setNumber(e.target.value);
  };

  // once any change occur in input, re-evaluate the validity of form and update it
  useEffect(() => {
    if (name.length > 0 && number.length > 0) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [name, number]);

  // when form validity changes, change the error text
  useEffect(() => {
    if (formIsValid) {
      setErrorText("");
    } else {
      setErrorText("* All Fields Are Required");
    }
  }, [formIsValid]);

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
            value = {name}
          />
        </div>
        <div className="mb-3">
          <label>Number</label>
          <input
            type="number"
            className="form-control"
            name="number"
            value={number}
            onChange={onNumberChangeHandler}
          />
        </div>

        <p style={{ color: "red" }}>{errorText}</p>

        {/* if form is not valid disable the submit button  */}
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!formIsValid}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewContact;
