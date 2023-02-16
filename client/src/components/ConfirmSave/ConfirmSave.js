import React, { useContext, useState } from "react";
import "./ConfirmSave.css";
import confirImg from "../../Assets/happy.png";
import { UserContext } from "../../Context/UserContext";

const ConfirmSave = () => {
  const {
    setShowTextModal,
    setNotifyType,
    setNotifyAnim,
    handleTitle,
    confirmText,
    setConfirmText,
    selecetdText,
  } = useContext(UserContext);
  const [textTitle, setTextTitle] = useState("");

  const handleSubmit = () => {
    setConfirmText(true);
  };

  const handleSave = () => {
    handleTitle(textTitle);
    setShowTextModal(false);
    setNotifyAnim(true);
    setNotifyType("success");
    setConfirmText(false);
  };

  const handleCancel = () => {
    setShowTextModal(false);
    setNotifyAnim(true);
    setNotifyType("error");
    setConfirmText(false);
  };
  return (
    <div className="confirm-save--container">
      <img src={confirImg} alt="confirm" />
      {confirmText ? (
        <>
          <h1>Confirmation</h1>
          <div className="confirm-text--container">
            <p>
              <span>Title:</span> {textTitle}
            </p>
            <p>
              <span>Selected Text: </span>
              {selecetdText}
            </p>
          </div>
          <div className="confirm-save-btn-container">
            <button className="confirm-save-btn-cancel" onClick={handleCancel}>
              Cancel
            </button>
            <button onClick={handleSave} className="confirm-save-btn-save">
              Save
            </button>
          </div>
        </>
      ) : (
        <>
          <p>Please! Enter a title</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              required
              value={textTitle}
              onChange={(e) => setTextTitle(e.target.value)}
            />
            <div className="confirm-save-btn-container">
              <button
                className="confirm-save-btn-cancel"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button type="submit" className="confirm-save-btn-save">
                Next
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default ConfirmSave;
