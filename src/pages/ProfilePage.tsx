import { notification, Typography, Divider, Row, Col, Space } from "antd";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { YoutubeChannel } from "youtube.ts";
import { getUser } from "../content";
import { fetchChannelData, fetchLatestVideos } from "../content/youtube";
import { VideoWithChannel } from "../content/youtube/types";
import { SocialBadges } from "../SocialComponent/SocialBadges";
import { TwitchPage } from "../SocialComponent/TwitchPage";
import { TwitterFeed } from "../SocialComponent/TwitterFeed";
import { YouTubeList } from "../SocialComponent/YouTubeList";

const { Title, Paragraph: P } = Typography;

export const ProfilePage = () => {
  const navigate = useNavigate();

  const { username } = useParams();
  const user = getUser(username ?? "");

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

    const { youtube } = user.socials;

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

  const { youtube, twitter, twitch } = user.socials;

  const description =
    user.description ?? youtubeChannelData?.snippet.description;

  const Badges = <SocialBadges {...user.socials} />;

  return (
    <div>
      <Row gutter={16} wrap>
        {youtube && (
          <Col span={4} className="center">
            <img
              src={youtubeChannelData?.snippet.thumbnails.high.url}
              alt=""
              height="100%"
              width="100%"
            />
          </Col>
        )}

        <Col span={16}>
          <Space align="center">
            <Title style={{ margin: 0 }}>{username}</Title>
            {Badges}
          </Space>
          {description && <P>{description}</P>}
        </Col>
      </Row>

      <Row gutter={16} wrap>
        {youtube && (
          <Col span={8}>
            <Divider>Latest Videos</Divider>
            <YouTubeList playlistItems={playlistItems} />
          </Col>
        )}

        {twitch && (
          <Col span={8}>
            <Divider>Latest Streams</Divider>
            <TwitchPage channel={twitch.id} />
          </Col>
        )}

        {twitter && (
          <Col span={8}>
            <Divider>Latest Tweets</Divider>
            <TwitterFeed screenName={twitter.id} />
          </Col>
        )}
      </Row>
    </div>
  );
};
