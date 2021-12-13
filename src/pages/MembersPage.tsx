import React from "react";
import { Link } from "react-router-dom";
import { users } from "../content";

export const MembersPage = () => {
  const sublinks = users.map(({ username }) => (
    <Link
      to={`/members/${username}`}
      key={username}
      style={{ display: "block", margin: "1rem 0" }}
    >
      {username}
    </Link>
  ));

  return (
    <div>
      <h1>MembersPage</h1>
      {sublinks}
    </div>
  );
};
