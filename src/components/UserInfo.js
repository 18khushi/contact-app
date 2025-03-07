import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UserInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, email, image } = location.state.contact; // Include image in destructuring

  return (
    <div>
      <h2>User Information</h2>
      <div style={{ marginBottom: "20px" }}>
        {image ? (
          <img src={image} alt="User" style={{ width: "100px", borderRadius: "50%" }} />
        ) : (
          <img src="https://via.placeholder.com/100" alt="Placeholder" style={{ width: "100px", borderRadius: "50%" }} />
        )}
      </div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <button onClick={() => console.log("Edit button clicked")} style={{ marginRight: "10px" }}>Edit</button>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default UserInfo;
