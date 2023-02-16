import React, { useState } from "react";
import "./ShowCaptures.css";
import CaptureCard from "../CaptureCard/CaptureCard";

const ShowCaptures = () => {
  let data = JSON.parse(window.localStorage.getItem("savedTextData"));
  const [selectedText, setSelectedText] = useState("");
  return (
    <div className="text-compo--container">
      <h1 className="primary-heading">Captures</h1>
      <div className="capture-container">
        {data?.map((ele) => (
          <CaptureCard
            key={ele.id}
            title={ele.title}
            text={ele.text}
            timestamp={ele.timestamp}
            url={ele.url}
            selectedText={selectedText}
            setSelectedText={setSelectedText}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowCaptures;
