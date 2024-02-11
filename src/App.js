import React from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Form from "./components/Form";
import AboutPage from "./components/AboutPage";
import AboutLink from "./components/AboutLink";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FeedbackProvider } from "./context/FeedbackContext";

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Header bgColor="rgba(0, 0, 0, 0.4" textColor="#ff6a95" />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Form />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutLink />
          <br />
        </div>
      </Router>
    </FeedbackProvider>
  );
};

export default App;
