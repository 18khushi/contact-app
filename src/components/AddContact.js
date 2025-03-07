import React from "react";



class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    password: "", // New state variable for password
    image: null, // New state variable for user image

  };

  handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.setState({ image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  add = (e) => {

    e.preventDefault();
    if (this.state.name === "" || this.state.email === "" || this.state.password === "") {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state); // Include password in the handler
    this.setState({ name: "", email: "", password: "" }); // Reset password field
  };

  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              style={{ borderRadius: '5px', padding: '10px' }} // Added styling
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              style={{ borderRadius: '5px', padding: '10px' }} // Added styling
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password" // Password input type
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
              style={{ borderRadius: '5px', padding: '10px' }} // Added styling
            />
          </div>
          <div className="field">
            <label>Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={this.handleImageChange}
              style={{ borderRadius: '5px', padding: '10px' }} // Added styling
            />
          </div>
          <button className="ui button purple" style={{ borderRadius: '5px' }}>Add</button> {/* Changed to purple */}

        </form>
      </div>
    );
  }
}

export default AddContact;
