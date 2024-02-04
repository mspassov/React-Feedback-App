import React from "react";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedback }) => {
  return (
    <>
      {feedback == null || feedback.length == 0 ? (
        <p>No feedback yet</p>
      ) : (
        feedback.map((item) => (
          <div key={item.id}>
            <FeedbackItem frating={item.rating} ftext={item.text} />
          </div>
        ))
      )}
    </>
  );
};

export default FeedbackList;
