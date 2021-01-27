import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/Form";
import PhoneBook from "./components/PhoneBook/PhoneBook";

export default function App() {
  const [phoneBook, updatePhoneBook] = useState([]);

  const handleFormSubmit = (userData) => {
    const updatedPhoneBook = [...phoneBook, userData];

    updatePhoneBook(updatedPhoneBook);
  };

  return (
    <div className="App">
      <Form handleFormSubmit={handleFormSubmit} />
      <PhoneBook phoneBookEntry={phoneBook} />
    </div>
  );
}
