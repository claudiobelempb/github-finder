import React from "react";
import ImgSpinner from "../../assets/images/spinner.gif";

const Spinner = () => {
  return (
    <div>
      <img
        src={ImgSpinner}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt="loading..."
      />
    </div>
  );
};

export { Spinner };
