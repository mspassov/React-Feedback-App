import React from "react";
import Card from "./Card";
import Button from "./Button";
import RatingSelect from "./RatingSelect";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ feedback, addFeedback }) => {
  const [input, setInput] = useState("");
  const [selected, setSelected] = useState(10);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      id: uuidv4(),
      text: input,
      rating: selected,
    };

    addFeedback([newFeedback, ...feedback]);
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
