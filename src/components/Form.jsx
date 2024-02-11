import React from "react";
import Card from "./Card";
import Button from "./Button";
import RatingSelect from "./RatingSelect";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const Form = ({ feedback, addFeedback }) => {
  const { feedbackArray, setFeedbackArray, feedbackEdit, handleUpdate } =
    useContext(FeedbackContext);
  const [input, setInput] = useState("");
  const [selected, setSelected] = useState(10);

  //Check if we are in edit mode, whenever the "Edit" icon is changed
  useEffect(() => {
    if (feedbackEdit.edit) {
      setInput(feedbackEdit.item.text);
      setSelected(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedbackEdit.edit === false) {
      const newFeedback = {
        id: uuidv4(),
        text: input,
        rating: selected,
      };

      setFeedbackArray([newFeedback, ...feedbackArray]);
    } else {
      handleUpdate({ id: feedbackEdit.item.id, rating: selected, text: input });
    }

    setSelected(10);
    setInput("");
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>What is your rating for our service?</h2>
        <RatingSelect selected={selected} setSelected={setSelected} />
        <div className="input-group">
          <input
            onChange={handleChange}
            value={input}
            type="text"
            placeholder="Review..."
          />
          <Button
            type="submit"
            version="primary"
            isDisabled={input.length < 10 ? true : false}
          >
            Submit
          </Button>
        </div>
        {input.length < 10 && (
          <div className="message">Please enter at least 10 characters</div>
        )}
      </form>
    </Card>
  );
};

export default Form;
