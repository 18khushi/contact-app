import React from "react";
import { useNavigate } from "react-router-dom";


// import user from "../images/user.png"; // Commenting out the static import


const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  const navigate = useNavigate();


  const handleUserClick = () => {
    navigate(`/user/${id}`, {
      state: { contact: { name, email, image: props.contact.image } },

    });
  };

  return (

    <div className="item" style={{ backgroundColor: "#f0f8ff" }}>

      <img className="ui avatar image" src={props.contact.image} alt="user" />




      <div className="content">
        <div className="header" onClick={handleUserClick} style={{ cursor: "pointer" }}>{name}</div>

        <div onClick={handleUserClick} style={{ cursor: "pointer" }}>{email}</div>

      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHandler(id)}
      ></i>

    </div>
  );
};

export default ContactCard;
