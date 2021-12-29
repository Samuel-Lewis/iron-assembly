import { Avatar, Typography, Space } from "antd";
import React from "react";
import type { YoutubePlaylistItem, YoutubeChannel } from "youtube.ts";
import { VideoThumbnail } from "./VideoThumbnail";
import { Link } from "react-router-dom";
import { getUserBySocial } from "../content";

const { Paragraph: P, Title, Link: A } = Typography;

export type YouTubeCardProps = {
  video: YoutubePlaylistItem;
  channel?: YoutubeChannel;
};

export const YouTubeCard: React.FC<YouTubeCardProps> = ({ video, channel }) => {
  const { title, description, thumbnails, channelTitle, channelId } =
    video.snippet;

  const username = getUserBySocial(channelId, "youtube")?.username ?? "";
  const link = `https://www.youtube.com/watch?v=${video.contentDetails.videoId}`;
  const avatar = channel?.snippet.thumbnails.high.url;

  return (
    <Space align="start" size="large" wrap>
      <VideoThumbnail
        width={600}
        alt={title}
        thumbnails={thumbnails}
        link={link}
      />

      <Space direction="vertical" className="youtube-card-details">
        <span>
          <Avatar size="large" src={avatar} />{" "}
          {/* FIXME: Fix the link to the user */}
          <Link to={`/members/${username}`}>{channelTitle}</Link>
        </span>

        <Title level={5}>
          <A href={link}>{title}</A>
        </Title>
        <P type="secondary" ellipsis={{ rows: 5 }}>
          {description}
        </P>
      </Space>
    </Space>
  );
};
