import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Join() {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let navigate = useNavigate();

    let handleRegister = (e) => {
        e.preventDefault();
        // Save the user's email and password to local storage
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);
        navigate('/login');
    }
    let gotoupload = () => {
        navigate('/upload');
    }
    let gotohome = () => {
        navigate('/')
    }

    return (
        <>
             
            <div id="registerdiv">
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              height: "60px",
              boxShadow:"2px 2px 10px rgba(0,0,0,0.2)",
              alignItems: "center",
            }}
          >
            <h1 style={{ marginRight: "30vw", cursor:"pointer" }} onClick={gotohome}>pixabay</h1>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "30vw",
              }}
            >
              <button
                id="upload-butt"
                style={{ height: "8vh", marginLeft: "20vw" }}
               onClick={gotoupload}>
                <i className="fa-solid fa-upload"></i>upload
              </button>
            </div>
          </div>
                <form onSubmit={handleRegister}>
                    <h1>Please Registration here </h1><br /><br /><br />
                    <input 
                        type="email" placeholder="Enter your email" autoFocus  value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    /><br /><br />
                    <input 
                        type="password" placeholder="Enter your password" value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    /><br /><br />
                    <input type="submit" value="Register"  style={{fontSize:"20px",backgroundColor:"rgb(110, 155, 237,0.26)",borderRadius:"10px"}}/><br /><br/>
                </form>
            </div>
        </>
    );
}

export default Join;