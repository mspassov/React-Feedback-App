import React from "react";
import { useState } from "react";

const FeedbackItem = ({ frating, ftext }) => {
  const [rating, setRating] = useState(frating);
  const [text, setText] = useState(ftext);

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="tex-display">{text}</div>
    </div>
  );
};

export default FeedbackItem;
