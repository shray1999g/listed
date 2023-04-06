import { gapi } from "gapi-script";
import React, { useEffect, useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";
import apple_icon from "../../Images/apple_icon.png";
import google_icon from "../../Images/google_icon.png";
import ApiCalendar from 'react-google-calendar-api';

export default function Login() {
  const clientId =
    "1029765383688-ku55t2vn8fumcfu82152r5kt32la2hfg.apps.googleusercontent.com";
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const config = {
  //   "clientId": clientId,
  //   "apiKey": "AIzaSyAEYmqxGUPZHt3siB-5ytkuM66yJfQ2oDk",
  //   "scope": "https://www.googleapis.com/auth/calendar",
  //   "discoveryDocs": [
  //     "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
  //   ]
  // }

  // const apiCalendar = new ApiCalendar(config)

  const onSuccess = (res) => {
    console.log(
      "LOGIN SUCCESS! Current user: ", res.profileObj
    );
    localStorage.setItem("userDetails", JSON.stringify(res.profileObj));
    var accessToken = gapi.auth.getToken().access_token;
    console.log("accessToken", accessToken);
    // apiCalendar.getEvents().then(res=>console.log("events", res))
    
    setTimeout(() => {
      navigate('/dashboard')
    }, 500);
  };

  const onFailure = (res) => {
    console.log("LOGIN FAILED res: ", res);
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "openid email profile https://www.googleapis.com/auth/calendar",
      });
    }
    gapi.load("client:auth2", start);
  });


  function handelChange(e) {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  }

  function handleClick(e) {
    e.preventDefault();
    setTimeout(() => {
      navigate('/dashboard')
    }, 500);
  }

  return (
    <div className="flex flex-row bg-[#DDDDDD]">
      <div className="bg-black text-8xl font-serif font-bold text-white w-4/12 h-screen flex justify-center items-center">
        Board.
      </div>
      <div
        className="flex justify-center items-center w-8/12"
        id="googleSignin"
      >
        <div className="flex flex-col">
          <div className="text-5xl font-sans font-bold text-black text-start">
            Sign In
          </div>
          <div className="text-l text-start font-sans font-bold text-black mt-2">
            Sign in to your account
          </div>
          <div className="flex mt-8">
            <GoogleLogin
              clientId={clientId}
              buttonText="sign in With Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
              render={(renderProps) => (
                <div className="">
                  <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className="bg-white mr-10 flex flex-row items-center w-52 rounded-xl h-12"
                  >
                    <img
                    className="w-5 h-5 mt-0 mx-2"
                    src={google_icon}
                    alt=""
                  />
                    Sign in with Google
                  </button>
                  
                </div>
              )}
            />
            <div>
              <button
                onClick={handleClick}
                className="bg-white w-52 flex flex-row items-center rounded-xl h-12"
              >
                <img
                className="w-5 h-5 mt-0 mx-2"
                src={apple_icon}
                alt=""
              />
                Sign in with apple
              </button>
              
            </div>
          </div>
          <div className="bg-white w-full h-96 mt-8 rounded-2xl flex flex-col">
            <span className="font-semibold text-start mx-8 mt-8">
              Email address
            </span>
            <input
              name="email"
              value={email}
              style={{ textIndent: "20px" }}
              onChange={handelChange}
              className="bg-[#EAEAEA] mt-2 h-10 rounded-xl w-10/12 mx-8"
              type="email"
              placeholder="Enter email"
            />
            <span className="font-semibold text-start mx-8 mt-8">Password</span>
            <input
              name="password"
              value={password}
              style={{ textIndent: "20px" }}
              onChange={handelChange}
              className="bg-[#EAEAEA] mt-2 h-10 rounded-xl w-10/12 mx-8"
              type="password"
              placeholder="Enter password"
            />
            <div className="w-fit font-semibold cursor-pointer text-[#346BD4] text-start mx-8 mt-8">
              Forgot password?
            </div>
            <button
              className="bg-black text-white mt-8 h-10 rounded-xl w-10/12 mx-8"
              onClick={handleClick}
              disabled={!email || !password ? true : false}
            >
              Sign In
            </button>
          </div>
          <div className="flex flex-row justify-center mt-6">
            <div>Don't have an account? </div>
            <div className="text-[#346BD4] cursor-pointer mx-1">
              Register here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}