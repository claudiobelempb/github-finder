import React from "react";
import PropTypes from "prop-types";

const UserCard = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className={"card text__center"}>
      <img
        src={avatar_url}
        alt={"avatar"}
        className={"round__img"}
        style={{ width: "60px" }}
      />

      <h3>{login}</h3>

      <div>
        <a href={html_url} className={"btn btn__dark btn__sm my__1"}>
          More
        </a>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
};

export { UserCard };
