import React from "react";
import PropTypes from "prop-types";

const Header = ({ text, bgColor, textColor }) => {
  return (
    <header style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="container">
        <h2>React Feedback App</h2>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: "Feedback Header",
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
