import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import "./CaptureCard.css";
import ChatGPTModal from "../ChatGPTModal/ChatGPTModal";

const CaptureCard = ({
  title,
  text,
  timestamp,
  url,
  selectedText,
  setSelectedText,
}) => {
  const { showChatGPT, setShowChatGPT, askChatGPT, setLoading, chatGPTAnswer } =
    useContext(UserContext);

  const handleGPT = (txt) => {
    setLoading(true);
    setShowChatGPT(true);
    askChatGPT(txt);
    setSelectedText(txt);
  };
  return (
    <>
      {showChatGPT ? (
        <ChatGPTModal text={selectedText} chatGPTAnswer={chatGPTAnswer} />
      ) : null}
      <div className="capture-card--container">
        <p>
          <span>Timestamp: </span>
          {timestamp}
        </p>
        <p>
          <span>Site URL: </span>
          {url}
        </p>
        <p>
          <span>Title: </span> {title}
        </p>
        <p>
          <span>Text: </span>
          {text.length > 87 ? `${text.slice(0, 94)}...` : text}
        </p>
        <button
          onClick={() => handleGPT(text)}
          className="primary-button utility-gpt"
        >
          Use ChatGPT
        </button>
      </div>
    </>
  );
};

export default CaptureCard;
