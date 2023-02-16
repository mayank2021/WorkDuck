import { createContext, useContext, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  //State's
  const [selecetdText, setSelectedText] = useState();
  const [showTextModal, setShowTextModal] = useState(false);
  const [notifyAnim, setNotifyAnim] = useState(false);
  const [notifyType, setNotifyType] = useState("");
  const [textData, setTextData] = useState([]);
  const [confirmText, setConfirmText] = useState(false);
  const [captures, setCaptures] = useState(false);
  const [showChatGPT, setShowChatGPT] = useState(false);
  const [chatGPTAnswer, setChatGPTAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  //ELEMENT'S REF'S
  let copyTextBtnRef = useRef();
  let selectableTextRef = useRef();

  // Handle the mouse up event
  const handleMouseUp = () => {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText.length) {
      copyTextBtnRef.current.style.display = "block";
      setSelectedText(selectedText);
    }
  };

  // Handle the mouse down event
  const handleMouseDown = (eve) => {
    if (
      copyTextBtnRef.current &&
      window?.getComputedStyle(copyTextBtnRef.current).display === "block" &&
      eve.target.id !== "save-text-btn"
    ) {
      copyTextBtnRef.current.style.display = "none";
      window.getSelection().empty();
    }
  };

  //Event's listners
  useEffect(() => {
    selectableTextRef?.current?.addEventListener("mouseup", handleMouseUp);
    return () => {
      document?.addEventListener("mousedown", handleMouseDown);
    };
  }, [handleMouseUp]);

  //handle text title
  const handleTitle = (title) => {
    let textObj = {
      id: uuidv4(),
      title: title,
      text: selecetdText,
      timestamp: Date.now(),
      url: window.location.href,
    };

    let data = JSON.parse(window.localStorage.getItem("savedTextData"));
    if (data) {
      setTextData(() => [...data, textObj]);
    } else {
      setTextData(() => [textObj]);
    }
  };

  useEffect(() => {
    if (textData.length) {
      localStorage.setItem("savedTextData", JSON.stringify(textData));
    }
  }, [textData]);

  //chat GPT
  const askChatGPT = async (text) => {
    // console.log(text, "hellotext");
    await axios
      .post("http://localhost:8000/chat", { text })
      .then((res) => {
        setChatGPTAnswer(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err, "chatGPT");
        setLoading(false);
      });
  };
  return (
    <UserContext.Provider
      value={{
        copyTextBtnRef,
        selectableTextRef,
        showTextModal,
        setShowTextModal,
        notifyAnim,
        setNotifyAnim,
        notifyType,
        setNotifyType,
        handleTitle,
        confirmText,
        setConfirmText,
        selecetdText,
        captures,
        setCaptures,
        showChatGPT,
        setShowChatGPT,
        askChatGPT,
        chatGPTAnswer,
        loading,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
