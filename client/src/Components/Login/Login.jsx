import React from "react";
import "./Login.css";
// import dotenv from "dotenv";
// dotenv.config();

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=00fdc5f435544c7c867ea69f47081ebe&response_type=code&redirect_uri=https://system-design-seven.vercel.app/callback&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";
const Login = () => {
  return (
    <div className="login_body">
      <img src="../../../public/spotify_white.png" alt="" />
      <h1>Login to Spooify</h1>
      <a href={AUTH_URL}>
        <button className="login-button">Login with Spotify</button>
      </a>
    </div>
  );
};

export default Login;
