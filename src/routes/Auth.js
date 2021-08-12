import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import AuthForm from "components/AuthForm";
import { authService, firebaseInstance } from "fbase";
import "../css/Auth.css";

const Auth = () => {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    await authService.signInWithPopup(provider);
  };
  return (
    <div className="authContainer">
      <AuthForm />
      <div className="authBtns">
        <button className="authBtn" onClick={onSocialClick} name="google">
          Continue with <span className="google-blue">G</span>
          <span className="google-red">o</span>
          <span className="google-yellow">o</span>
          <span className="google-blue">g</span>
          <span className="google-green">l</span>
          <span className="google-red">e </span>
          <FontAwesomeIcon icon={faGoogle} />
        </button>
        <button className="authBtn" onClick={onSocialClick} name="github">
          Continue with Github <FontAwesomeIcon icon={faGithub} />
        </button>
      </div>
    </div>
  );
};
export default Auth;
