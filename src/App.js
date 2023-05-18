import { useState } from "react";
import "./App.css";
import AvailableChats from "./AvailableChats";
import AuthPage from "./AuthPage";
import axios from "axios";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [idInstance, setIdInstance] = useState("");
  const [apiToken, setApiToken] = useState("");

  const handleLogin = async () => {
    await axios
      .post(
        `https://api.green-api.com/waInstance${idInstance}/setSettings/${apiToken}`
      )
      .then(setIsLogin(true));
  };

  return (
    <div className="App">
      <div className="container">
        {!isLogin ? (
          <AuthPage
            idInstance={idInstance}
            apiToken={apiToken}
            setIdInstance={setIdInstance}
            setApiToken={setApiToken}
            handleLogin={handleLogin}
          />
        ) : (
          <AvailableChats idInstance={idInstance} apiToken={apiToken} />
        )}
      </div>
    </div>
  );
}

export default App;
