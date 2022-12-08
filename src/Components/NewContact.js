import React, { useContext, useEffect, useState } from "react";
import { ContactContext } from "../context/ContactContext";

import "./css/NewContact.css";

const NewContact = () => {
  const contact = useContext(ContactContext);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [errorText, setErrorText] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  
  const newContactSubmitHandler = (e) => {
    e.preventDefault();

    const newContact = {
      name,
      number,
    };

    contact.push(newContact);
  };


  const onNameChangeHandler = (e) => {
    e.preventDefault();

    setName(e.target.value);
  };


  const onNumberChangeHandler = (e) => {
    e.preventDefault();

    setNumber(e.target.value);
  };


  useEffect(()=>{

    if (name.length > 0 && number.length > 0) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [name,number])


  useEffect(()=>{
    if(formIsValid){
      setErrorText("");
    }
    else{
      setErrorText("All Fields Are Required *");
    }
  }, [formIsValid])


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
        
        <p style={{"color": "red"}}>{errorText}</p>

        <button type="submit" className="btn btn-primary" disabled={!formIsValid}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewContact;
