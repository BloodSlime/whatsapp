import "./AuthPage.css";
import React, { useEffect } from "react";

const AuthPage = ({
  setApiToken,
  setIdInstance,
  apiToken,
  idInstance,
  handleLogin,
}) => {
  const handleOnChange = (settterFunc, e) => {
    settterFunc(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleLogin();
  };
  return (
    <div className="auth-page-wrapper">
      <form>
        <label>Введите Ваш id-instance</label>
        <input
          className="login-input id-instance"
          onChange={(e) => handleOnChange(setIdInstance, e)}
          value={idInstance}
        />
        <label>Введите Ваш apiTokenInstance</label>
        <input
          className="login-input apiTokenInstance"
          onChange={(e) => handleOnChange(setApiToken, e)}
          value={apiToken}
        />
        <button onClick={(e) => handleSubmit(e)}>Login</button>
      </form>
    </div>
  );
};

export default AuthPage;
