import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserInfo from "./UserInfo"; 
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Header"; // Corrected casing for the import statement
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  );

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact, image: contact.image }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    } catch (error) {
        console.error("Failed to save contacts to local storage:", error);
    }
  }, [contacts]);

  return (
    <Router>
      <Routes>
        <Route path="/user/:id" element={<UserInfo />} />
        <Route path="/" element={
          <div className="ui container" style={{ backgroundColor: "#f0f8ff" }}>
            <Header />
            <AddContact addContactHandler={addContactHandler} />
            <ContactList contacts={contacts} getContactId={removeContactHandler} />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
