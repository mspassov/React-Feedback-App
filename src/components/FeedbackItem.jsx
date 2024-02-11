import React from "react";
import Card from "./Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useState } from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({ id, frating, ftext }) => {
  const { handleDelete, handleFeedbackEdit } = useContext(FeedbackContext);

  return (
    <Card reverse={false}>
      <div className="num-display">{frating}</div>
      <button className="close" onClick={() => handleDelete(id)}>
        <FaTimes color="purple" />
      </button>
      <button
        className="edit"
        onClick={() => handleFeedbackEdit({ id, rating: frating, text: ftext })}
      >
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{ftext}</div>
    </Card>
  );
};

export default FeedbackItem;
