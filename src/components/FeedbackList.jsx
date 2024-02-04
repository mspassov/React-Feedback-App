import React from "react";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedback, delItem }) => {
  return (
    <>
      {feedback == null || feedback.length == 0 ? (
        <p>No feedback yet</p>
      ) : (
        feedback.map((item) => (
          <div key={item.id}>
            <FeedbackItem
              id={item.id}
              frating={item.rating}
              ftext={item.text}
              delItem={delItem}
            />
          </div>
        ))
      )}
    </>
  );
};

export default FeedbackList;
