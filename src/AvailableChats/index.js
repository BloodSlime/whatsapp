import { useEffect, useState } from "react";
import ChatCard from "../ChatCard";
import "./AvailableChats.css";
import axios from "axios";

const AvailableChats = ({ idInstance, apiToken }) => {
  const [chats, setChats] = useState([]);

  async function fetchData() {
    await axios
      .get(
        `https://api.green-api.com/waInstance${idInstance}/getContacts/${apiToken}`
      )
      .then((response) => {
        console.log(response.data);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="available-chats-wrapper">
      <div className="account-icon"></div>
      <form>
        <input placeholder="Поиск чата" />
      </form>
      <ChatCard />
    </div>
  );
};

export default AvailableChats;
