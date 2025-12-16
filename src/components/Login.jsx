import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState("");
  const disPatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      disPatch(addUser(result.data));
      setTimeout(() => {
        navigate("/");
      }, 200);
    } catch (error) {
      setEmailId("")
      setPassword("")
      setError(error?.response?.data || "something went wrong");
      console.error(error);
    }
  };
  const handleSignup = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        {
          firstName,
          lastName,
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );
      disPatch(addUser(res.data.data));
      navigate("/profile");
    } catch (error) {
      setError(error?.response?.data || "something went wrong");
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">
            {isLoginForm ? "Login" : "Signup"}
          </h2>
          <div>
            {!isLoginForm && (
              <>
                <fieldset className="fieldset my-2">
                  <legend className="fieldset-legend">First Name</legend>
                  <input
                    type="text"
                    value={firstName}
                    className="input"
                    placeholder="Type here"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset my-2">
                  <legend className="fieldset-legend">Last Name</legend>
                  <input
                    type="text"
                    value={lastName}
                    className="input"
                    placeholder="Type here"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </fieldset>
              </>
            )}

            <fieldset className="fieldset my-2">
              <legend className="fieldset-legend">Email</legend>
              <input
                type="text"
                value={emailId}
                className="input"
                placeholder="Type here"
                onChange={(e) => setEmailId(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset my-2">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                value={password}
                className="input"
                placeholder="Type here"
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center m-2">
            <button
              className="btn btn-primary"
              onClick={isLoginForm ? handleLogin : handleSignup}
            >
              {isLoginForm ? "Login" : "Signup"}
            </button>
          </div>
          <p
            className=" m-auto cursor-pointer py-2"
            onClick={() =>
              setIsLoginForm((value) => {
                setError("");

                return !value;
              })
            }
          >
            {isLoginForm
              ? "New User? Signup Here"
              : "Existing User ? Login Here"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
