import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import "./Nav.css";

const Nav = () => {
  const { copyTextBtnRef, setShowTextModal, captures, setCaptures } =
    useContext(UserContext);
  return (
    <div className="navigation">
      <h1>Chill</h1>
      <div className="nav-btn-container">
        <button
          className="primary-button"
          onClick={() => setCaptures(!captures)}
        >
          {captures ? "Go Back" : "Show Captures"}
        </button>
        <button
          className="utility-btn primary-button"
          ref={copyTextBtnRef}
          id="save-text-btn"
          onClick={() => setShowTextModal(true)}
        >
          Save text
        </button>
      </div>
    </div>
  );
};

export default Nav;
