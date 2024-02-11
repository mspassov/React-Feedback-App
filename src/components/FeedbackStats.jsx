import React from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackStats = () => {
  const { feedbackArray } = useContext(FeedbackContext);

  let total = 0;
  for (let i = 0; i < feedbackArray.length; i++) {
    total += feedbackArray[i].rating;
  }
  let avg = total / feedbackArray.length;

  return (
    <div className="feedback-stats">
      <h4>
        {feedbackArray.length}{" "}
        {feedbackArray.length == 1 ? "Review" : "Reviews"}
      </h4>
      <h4>Average Rating: {isNaN(avg) ? "N/A" : avg}</h4>
    </div>
  );
};

export default FeedbackStats;
