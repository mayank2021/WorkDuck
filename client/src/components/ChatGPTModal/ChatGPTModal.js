import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import "./ChatGPTModal.css";
import Loader from "../Loader/Loader";

const ChatGPTModal = ({ text, chatGPTAnswer }) => {
  const { setShowChatGPT, loading } = useContext(UserContext);
  return (
    <div className="selected-text-modal-container">
      <div className="chat-gpt-container">
        <button onClick={() => setShowChatGPT(false)} className="cancel-btn">
          x
        </button>
        <h3>{text}</h3>
        {loading ? <Loader /> : <p>{chatGPTAnswer}</p>}
      </div>
    </div>
  );
};

export default ChatGPTModal;
