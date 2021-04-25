import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../signUp/signup.css";
const Signup = (props) => {
  const [signUpState, setSignUpState] = useState("");
  const [usernamereg, setUsernamReg] = useState("");
  const [paswordreg, setpasswordReg] = useState("");
  const [userIdReg, setUserIdReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [hasroleReg, sethasroleReg] = useState("");
  let showsignup = signUpState;
  let history = useHistory();
  const signupHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3002/api/signup", {
        username: usernamereg,
        password: paswordreg,
        userid: userIdReg,
        email: emailReg,
        hasrole: hasroleReg,
      })
      .then((respose) => {
        setSignUpState(respose.data);
        if (respose.data === "sign up sucessfully!") {
          history.push("/");
        }
      });
  };
  return (
    <div className="container">
      <div className="row">
        <form className="col s12 l3 md6 signup-form">
          <h3>Sign up</h3>
          <div className="input-field">
            <input
              className="inputs"
              type="text"
              id="username"
              placeholder="username"
              onChange={(e) => {
                setUsernamReg(e.target.value);
              }}
            />
          </div>
          <div className="input-field">
            <input
              className="inputs"
              type="text"
              id="userid"
              placeholder="userid"
              onChange={(e) => {
                setUserIdReg(e.target.value);
              }}
            />
          </div>
          <div className="input-field">
            <input
              className="inputs"
              type="email"
              id="email"
              placeholder="email"
              onChange={(e) => {
                setEmailReg(e.target.value);
              }}
            />
          </div>
          <div className="input-field">
            <input
              className="inputs"
              type="password"
              id="password"
              placeholder="password"
              onChange={(e) => {
                setpasswordReg(e.target.value);
              }}
            />
          </div>
          <div className="input-field">
            <input
              className="inputs"
              type="text"
              id="hasrole"
              placeholder="role"
              onChange={(e) => {
                sethasroleReg(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="btn signupbtn"
            onClick={signupHandler}
          >
            Submit
          </button>
        </form>
        <h1>{showsignup}</h1>
      </div>
    </div>
  );
};
export default Signup;
