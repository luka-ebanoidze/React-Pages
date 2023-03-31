import React from "react";

import './UsersList.css'

import { UserCard } from "./UserCard";

export const UsersList = ({ usersData }) => {
  return (
    <div className="crypto_list">
      {usersData.map((user, index) => {
        return (
          <UserCard
            key={user.id}
            image={user.image}
            title={user.firstName}
          />
        );
      })}
    </div>
  );
};


