import React, { useState } from "react";
import { NavBar } from "./components/layout/NavBar";
import { Users } from "./components/users/Users";
import { Search } from "./components/Search";

import axios from "axios";

import "./global.css";

const BASE_URL = `https://api.github.com`;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       setLoading(true);
  //       const users = await axios.get(
  //         `${BASE_URL}/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //       );
  //       setUsers(users.data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error, "Error");
  //     }
  //   })();
  // }, []);

  const handleSearchUsers = async (value) => {
    setLoading(true);
    const result = await axios.get(
      `${BASE_URL}/search/users?q=${value}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setLoading(false);
    setUsers(result.data.items);
  };

  const handleClearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  return (
    <>
      <NavBar />
      <div className={"container"}>
        <Search
          onSearchUsers={handleSearchUsers}
          onClearUsers={handleClearUsers}
          showClearButton={users.length > 0 ? true : false}
        />
        <Users loading={loading} users={users} />
      </div>
    </>
  );
};

export default App;
