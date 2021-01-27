import React, { useState } from "react";
import "./styles.css";

const Form = ({ handleFormSubmit }) => {
  const [firstName, setFirstName] = useState("Coder");
  const [lastName, setLastName] = useState("Byte");
  const [phoneNumber, setPhoneNumber] = useState("8889992345");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      firstName,
      lastName,
      phoneNumber
    };
    handleFormSubmit(userData);
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
  };

  return (
    <div className="formContainer">
      <form className="userForm" onSubmit={handleSubmit}>
        <input
          type="text"
          name="user_firstname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          name="user_lastname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          name="user_phonenumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button type="submit">Add Entry</button>
      </form>
    </div>
  );
};

export default Form;
