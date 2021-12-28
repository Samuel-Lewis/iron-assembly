import { notification, Typography } from "antd";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { YoutubeChannel } from "youtube.ts";
import { getUser } from "../content";
import { fetchChannelData, fetchLatestVideos } from "../content/youtube";
import { VideoWithChannel } from "../content/youtube/types";
import { YouTubeList } from "../SocialComponent/YouTubeList";

const { Title } = Typography;

export const ProfilePage = () => {
  const navigate = useNavigate();

  const { username } = useParams();
  const user = getUser(username ?? "");

  const { youtube } = user?.socials ?? {};
  const [youtubeChannelData, setYouTubeChannelData] = React.useState<
    YoutubeChannel | undefined
  >();
  const [playlistItems, setPlaylistItems] = React.useState<VideoWithChannel[]>(
    []
  );

  const userNotFound = () =>
    notification.error({
      message: "Could not find player",
      description: "Sorry, the user you were looking for could not be found.",
    });

  useEffect(() => {
    if (!username || !user) {
      userNotFound();
      return;
    }

    if (youtube) {
      const channelId = youtube.id;
      fetchChannelData(channelId).then((channel) => {
        setYouTubeChannelData(channel);
      });
      fetchLatestVideos({ channelIds: [channelId] }).then((videos) => {
        setPlaylistItems(videos);
      });
    }
  }, [username, user]);

  if (!username || !user) {
    navigate("/members");
    return null;
  }

  return (
    <div>
      <Title level={2}>{username}</Title>
      {youtubeChannelData && (
        <img
          // @ts-ignore - externalUrl is all that is returned on request. Incorrect types in youtube.ts?
          src={youtubeChannelData.brandingSettings.image.bannerExternalUrl}
          alt="banner"
        />
      )}
      {youtube && <YouTubeList playlistItems={playlistItems} />}
    </div>
  );
};
