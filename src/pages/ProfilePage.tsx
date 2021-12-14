import { notification } from "antd";
import React from "react";
import {
  useNavigate,
  useParams
} from "react-router-dom";
import { getUser } from "../content";
import { YouTubeList } from "../SocialComponent/YouTubeList";

export const ProfilePage = () => {
  let { username } = useParams();
  const navigate = useNavigate();

  const userNotFound = () =>
    notification.error({
      message: "Could not find player",
      description: "Sorry, the user you were looking for could not be found.",
    });

  const user = getUser(username ?? "");
  if (!username || !user) {
    userNotFound();
    navigate("/members");
    return null;
  }

  const { youtube } = user.socials ?? {};

  return (
    <div>
      <h2>User: {username}</h2>
      {youtube && <YouTubeList userId={youtube.id} />}
    </div>
  );
};
