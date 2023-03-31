import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import { UsersList } from "./componenets/UsersList";
import Pagination from "./componenets/Pagination";

const App = () => {
  const [coinsData, setCoinsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    await axios.get("https://dummyjson.com/users").then((res) => {
      setCoinsData(res.data.users);
    });
  };

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="app">
      <h1>Users</h1>
      <Pagination 
        totalPosts={coinsData.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <UsersList usersData={currentPosts} />
    </div>
  );
};

export default App;
