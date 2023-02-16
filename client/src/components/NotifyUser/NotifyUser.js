import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import "./NotifyUser.css";

const NotifyUser = ({ type }) => {
  const { notifyAnim, setNotifyAnim } = useContext(UserContext);
  return (
    <div
      className={`${notifyAnim ? type : null} ${
        notifyAnim ? "notify-container" : null
      } `}
      onAnimationEnd={() => setNotifyAnim(false)}
    >
      <h2>
        {notifyAnim
          ? type === "success"
            ? "Saved Successfully"
            : "Saved unsuccessful"
          : null}
      </h2>
    </div>
  );
};

export default NotifyUser;
