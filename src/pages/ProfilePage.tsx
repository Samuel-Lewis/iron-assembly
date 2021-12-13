import { notification } from "antd";
import React from "react";
import {
  useNavigate,
  useParams
} from "react-router-dom";
import { getUser } from "../content";

export const ProfilePage = () => {
  let { username } = useParams();
  const navigate = useNavigate();

  const userNotFound = () =>
    notification.error({
      message: "Could not find player",
      description: "Sorry, the user you were looking for could not be found.",
    });

  if (!username) {
    userNotFound();
    navigate("/members");
    return null;
  }

  const user = getUser(username);
  if (!user) {
    userNotFound();
    navigate("/members");
    return null;
  }

  return (
    <div>
      <h2>User: {username}</h2>
      <img
        src={`https://crafatar.com/renders/body/${user.uuid}?overlay=true`}
        alt={`${username}'s Minecraft avatar`}
      />
    </div>
  );
};
