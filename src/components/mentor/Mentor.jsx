import React from "react";
import MentorItem from "./MentorItem";
import "./mentor.css";

function Mentor() {
  return (
    <div className="Mentor_section">
      <div className="side_padding">
        <h2 className="Mentor_title">Наши ментора</h2>
        <MentorItem />
      </div>
    </div>
  );
}

export default Mentor;
