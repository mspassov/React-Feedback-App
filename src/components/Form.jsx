import React from "react";
import Card from "./Card";
import Button from "./Button";
import { useState } from "react";

const Form = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  return (
    <Card>
      <form>
        <h2>What is your rating for our service?</h2>
        <div className="input-group">
          <input
            onChange={handleSubmit}
            value={input}
            type="text"
            placeholder="Review..."
          />
          <Button type="submit" version="primary" isDisabled={false}>
            Submit
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Form;
