import React, { useEffect } from "react";
import axios from "axios";

const ChatPage = () => {
  const fetchChats = async () => {
    const response = await axios.get("http://localhost:4000/api/chats");
    console.log(response.data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return <div>ChatPage</div>;
};

export default ChatPage;
