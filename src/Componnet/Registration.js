import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Mobile:", mobile);
    setUsername("");
    setPassword("");
    setMobile("");

    await axios
      .post("http://localhost:5500/register", {
        user_name: username,
        password: password,
        mobile: mobile,
      })
      .then(function (response) {
        console.log(response);
        if (response.data==="Registration sucess") {
          alert(" yeah user sucessfully register");
          navigate("/");
        } else {
          alert("Please enter valid detail");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const HandleLogin = () => {
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="mobile">Mobile</label>
          <input
            type="text"
            id="mobile"
            value={mobile}
            onChange={handleMobileChange}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>
          Register
        </button>
        <button onClick={HandleLogin}>Login Here</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: "300px",
    margin: "auto",
    marginTop: "50px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    textAlign: "center",
  },
  inputGroup: {
    marginBottom: "15px",
    textAlign: "left",
  },
  input: {
    width: "100%",
    padding: "8px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Registration;
