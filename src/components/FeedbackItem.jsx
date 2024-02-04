import React from "react";
import Card from "./Card";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const FeedbackItem = ({ id, frating, ftext, delItem }) => {
  const [rating, setRating] = useState(frating);
  const [text, setText] = useState(ftext);

  return (
    <Card reverse={false}>
      <div className="num-display">{rating}</div>
      <button className="close" onClick={() => delItem(id)}>
        <FaTimes color="purple" />
      </button>
      <div className="tex-display">{text}</div>
    </Card>
  );
};

export default FeedbackItem;
