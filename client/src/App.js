import "./App.css";
import Homepage from "./Pages/Homepage.js";
import { Route, Routes } from "react-router-dom";
import ChatPage from "./Pages/ChatPage";

function App() {
  localStorage.clear();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="/chats" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
