import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let navigate = useNavigate();

    let handleSubmit = (e) => {
        e.preventDefault();
        // Retrieve the user's credentials from local storage
        let storedEmail = localStorage.getItem('userEmail');
        let storedPassword = localStorage.getItem('userPassword');

        // Check if the credentials match
        if (email === storedEmail && password === storedPassword) {
            navigate('/', { state: { email, password } });
        } else {
            alert('Invalid email or password');
        }
    }
    let gotojoin = () => {
        navigate('/join')
    }
    let gotoupload = () => { 
        navigate('/upload')
    }


    return (
      <>
        <div id="logindiv">
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              height: "60px",
              boxShadow:"0px 0px 3px rgba(0,0,0,0.2)",
              alignItems: "center",
            }}
          >
            <h1 style={{ marginRight: "30vw" }}>pixabay</h1>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "30vw",
              }}
            >
              <button
              onClick={gotoupload}
                id="upload-butt"
                style={{ height: "8vh", marginLeft: "20vw" }}
              >
                <i className="fa-solid fa-upload"></i>upload
              </button>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <h1>Welcome to Login Page</h1>
            <br />
            <br />
            <br />
            <input
              type="email"
              placeholder="Enter your email" autoFocus
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <br />
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <br />
            <br />
            <input type="submit" value="Submit" />
            <br />
            <br />
            <button
              id="signup-but"
              type="button"
              style={{
                width: "10vw",
                border: "none",
                borderRadius: "10px",
                height: "7vh",
              }}
              onClick={gotojoin}
            >
              Sign up
            </button>
          </form>
        </div>
      </>
    );
}
export default Login