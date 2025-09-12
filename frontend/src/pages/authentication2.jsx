import React from "react"
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import "../App.css"
import httpStatus from "http-status"


export default function Authentication2(){

  const navigate = useNavigate();

  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();
  const [name, setName] = React.useState();
  const [error, setError] = React.useState();
  const [messages, setMessages] = React.useState();
  const [open, setOpen] = React.useState(false)

  const [formState, setFormState] = React.useState(0);

  const handleRegister = async () => {
    if (!name || !username || !password) {
      setError("Please enter both fields");
      return;
    }

    let config = {
      timeout: 5000
    }

    let postData = {
      name: name,
      username: username,
      password: password
    }

    try{
      const response = await axios.post('http://localhost:8000/api/v1/users/register',
        postData,
        config
      );

      if(response.status === httpStatus.CREATED){
        navigate("/login");
      }

    }
    catch(error){
      alert("WRONG")

    }

  };






  return(
    <div className="authContainer">
        <video autoPlay muted loop className="leftContainer">
          <source src="/authvideo.mp4" type="video/mp4"></source>
        </video>

      <div className="rightContainer">

        <div className="authMainContainer">

          <h2>Sign Up</h2>

          <input 
          type="text" 
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          ></input>

          <input 
          type="text" 
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          ></input>

          <input 
          type="Password" 
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          ></input>

          <button onClick={handleRegister}>Create Account</button>

          <p>Already a User? <span style={{color: "blue", cursor: "pointer"}} onClick={() => navigate('/login')}>Sign In</span></p>

        </div>

      </div>
    </div>

  );
}