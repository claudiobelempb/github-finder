import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ onSearchUsers, onClearUsers, showClearButton }) => {
  const [textInput, setTextInput] = useState("");

  const handleInputText = (e) => {
    setTextInput(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onSearchUsers(textInput);
    setTextInput("");
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit} className="form">
        <input
          value={textInput}
          type="text"
          name={"text"}
          placeholder="Search Users..."
          onChange={handleInputText}
        />
        <input
          value={"search"}
          type="submit"
          className="btn btn__dark btn__block"
        />
      </form>
      {showClearButton && (
        <button onClick={onClearUsers} className="btn btn__light btn__block">
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  onSearchUsers: PropTypes.func.isRequired,
  onClearUsers: PropTypes.func.isRequired,
  showClearButton: PropTypes.bool.isRequired,
};

export { Search };
