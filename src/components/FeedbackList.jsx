import React, { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackList = () => {
  const { feedbackArray } = useContext(FeedbackContext);
  console.log(feedbackArray);
  return (
    <>
      {feedbackArray == null || feedbackArray.length == 0 ? (
        <p>No feedback yet</p>
      ) : (
        feedbackArray.map((item) => (
          <div key={item.id}>
            <FeedbackItem
              id={item.id}
              frating={item.rating}
              ftext={item.text}
            />
          </div>
        ))
      )}
    </>
  );
};

export default FeedbackList;
