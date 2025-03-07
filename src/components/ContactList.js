import React from "react";
import ContactCard from "./ContactCard";
import './ContactList.css'; // Importing a new CSS file for grid layout

const ContactList = (props) => {
  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteConactHandler}

        key={contact.id}
      />
    );
  });

  return <div className="contact-list">{renderContactList}</div>; // Updated class for grid layout
};

export default ContactList;
