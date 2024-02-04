import React from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import feedbackArray from "./data/FeedbackData";

const App = () => {
  const [feedbackList, setFeedbackList] = useState(feedbackArray);

  return (
    <>
      <Header bgColor="rgba(0, 0, 0, 0.4" textColor="#ff6a95" />
      <div className="container">
        <FeedbackList feedback={feedbackList} />
      </div>
    </>
  );
};

export default App;
