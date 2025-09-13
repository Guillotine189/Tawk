import React from "react"
import axios from "axios";
import "../App.css"
import { useNavigate } from "react-router-dom"
import httpStatus from "http-status"
import server from '../environment';

const server_url = server;

export default function Authentication(){
  const navigate = useNavigate();

  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();
  const [name, setName] = React.useState();
  const [error, setError] = React.useState();
  const [messages, setMessages] = React.useState();
  const [open, setOpen] = React.useState(false)

  const [formState, setFormState] = React.useState(0);

  const handleLogin = async () => {
    if (!username || !password) {
      setError("Please enter both fields");
      return;
    }

    let config = {
      timeout: 5000
    }

    let postData = {
      username: username,
      password: password
    }

    try{
      const response = await axios.post((`${server_url}/api/v1/users/login`),
        postData,
        config
      );
      console.log(response.status);
      if(response.status === httpStatus.OK){
        localStorage.setItem('token', response.data.token);
        navigate("/home");
      }

      console.log(response);

    }
    catch(error){
      alert("WRONG");

    }

  };



  return(
    <div className="authContainer">
        <video autoPlay muted loop className="leftContainer">
          <source src="/authvideo.mp4" type="video/mp4"></source>
        </video>

      <div className="rightContainer">

        <div className="authMainContainer">

          <h2>Sign In</h2>

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

          <button onClick={handleLogin}>Login</button>

          <p>New User ?  <span style={{color: "blue", cursor: "pointer"}} onClick={() => navigate('/register')}>Sign Up</span></p>

        </div>

      </div>
    </div>

  );
}