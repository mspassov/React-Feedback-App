import React from "react";

const FeedbackStats = ({ farray }) => {
  let total = 0;
  for (let i = 0; i < farray.length; i++) {
    total += farray[i].rating;
  }
  let avg = total / farray.length;

  return (
    <div className="feedback-stats">
      <h4>
        {farray.length} {farray.length == 1 ? "Review" : "Reviews"}
      </h4>
      <h4>Average Rating: {isNaN(avg) ? "N/A" : avg}</h4>
    </div>
  );
};

export default FeedbackStats;
