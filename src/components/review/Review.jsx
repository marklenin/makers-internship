import React from "react";
import ReviewItem from "./ReviewItem";
import "./review.css";
import LeaveReview from "./LeaveReview";
import SendBio from "./SendBio";

function Review() {
  return (
    <div className="Review_section">
      <div className="side_padding">
        <h2 className="Review_title">Отзывы наших студентов</h2>
        <div style={{ display: "flex", gap: "2em" }}>
          <div className="Review_left">
            <ReviewItem />
            <LeaveReview />
          </div>
          <div className="Review_right">
            <SendBio />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
