import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {


  const navigate = useNavigate();
  useEffect(()=>{
    const Token = localStorage.getItem("token")

  if(Token=== 1){
    navigate("/Home")
  }else{
    
  }
  })




 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    
    console.log('Username:', username);
    console.log('Password:', password);

await axios.post('http://localhost:5500/login',{
user_name:username,
password:password
})
.then(function (response) {
  console.log(response.data.results);
  if(response.data.results === "No user found"){
    alert("Please enter valid detail")
  }else{
    navigate("/Home")
  localStorage.setItem("token", 1)
  }
})
.catch(function (error) {
  console.log(error);
});


    
  };
  const handlenavigate = () =>{
    navigate("/Registration")
  }

  return (
    <div style={styles.container}>
      <h2>Login</h2>
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
        <button type="submit" style={styles.button}>Login</button>
        <button onClick={handlenavigate}>Register Here</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: '300px',
    margin: 'auto',
    marginTop: '50px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: '15px',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '8px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Login;
