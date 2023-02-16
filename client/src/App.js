import React, { useContext } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import TextCompo from "./components/TextCompo/TextCompo";
import SelecetdTextModal from "./components/selecetdTextModal/selecetdTextModal";
import { UserContext } from "./Context/UserContext";
import NotifyUser from "./components/NotifyUser/NotifyUser";
import ShowCaptures from "./components/ShowCaptures/ShowCaptures";

function App() {
  const { showTextModal, notifyType, captures } = useContext(UserContext);
  return (
    <div style={{ paddingTop: 80 }}>
      <Nav />
      {captures ? <ShowCaptures /> : <TextCompo />}

      <NotifyUser type={notifyType} />
      {showTextModal ? <SelecetdTextModal /> : null}
    </div>
  );
}

export default App;
