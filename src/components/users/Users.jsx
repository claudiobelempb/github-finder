// import React, { useState } from "react";
import PropTypes from "prop-types";
import { UserCard } from "./UserCard";
import { Spinner } from "../layout/Spinner";

const Users = ({ users, loading }) => {
  // const [users, setUsers] = useState([
  //   {
  //     id: "1",
  //     login: "mojombo 1",
  //     avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  //     html_url: "https://github.com/mojombo",
  //   },
  //   {
  //     id: "2",
  //     login: "mojombo 2",
  //     avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  //     html_url: "https://github.com/mojombo",
  //   },
  //   {
  //     id: "3",
  //     login: "mojombo 3",
  //     avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  //     html_url: "https://github.com/mojombo",
  //   },
  // ]);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export { Users };
