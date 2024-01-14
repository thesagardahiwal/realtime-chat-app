import React from 'react';
import axios from 'axios';
function AuthPage( props ) {
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { value } = e.target[0];
        await axios.post(
            "http://localhost:8080/authenticate",
            {
                username: value,
            }
        )
        .then ((res) => {
            props.onAuth({ ...res, secret: value });
        })    
        .catch((e) => console.log(e))
    }
  return (
    <div className="background">
      <form onSubmit={handleSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  )
}

export default AuthPage