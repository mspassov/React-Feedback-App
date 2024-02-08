import React from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Form from "./components/Form";
import AboutPage from "./components/AboutPage";
import AboutLink from "./components/AboutLink";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import feedbackArray from "./data/FeedbackData";

const App = () => {
  const [feedbackList, setFeedbackList] = useState(feedbackArray);

  const handleDelete = (id) => {
    const newFeedback = feedbackList.filter((item) => item.id !== id);
    setFeedbackList(newFeedback);
  };

  return (
    <Router>
      <Header bgColor="rgba(0, 0, 0, 0.4" textColor="#ff6a95" />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Form feedback={feedbackList} addFeedback={setFeedbackList} />
                <FeedbackStats farray={feedbackList} />
                <FeedbackList feedback={feedbackList} delItem={handleDelete} />
              </>
            }
          ></Route>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <AboutLink />
        <br />
      </div>
    </Router>
  );
};

export default App;
