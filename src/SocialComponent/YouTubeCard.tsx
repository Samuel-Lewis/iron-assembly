import { Card, Avatar, Typography } from "antd";
import React from "react";
import type { YoutubePlaylistItem, YoutubeChannel } from "youtube.ts";
import { VideoThumbnail } from "./VideoThumbnail";

const { Meta } = Card;
const { Paragraph: P } = Typography;

export type YouTubeCardProps = {
  video: YoutubePlaylistItem;
  channel?: YoutubeChannel;
};

export const YouTubeCard: React.FC<YouTubeCardProps> = ({ video, channel }) => {
  const { title, description, thumbnails } = video.snippet;

  const link = `https://www.youtube.com/watch?v=${video.contentDetails.videoId}`;
  const avatar = channel?.snippet.thumbnails.high.url;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Card cover={<VideoThumbnail alt={title} thumbnails={thumbnails} />}>
        <Meta
          title={title}
          description={<P ellipsis={{ rows: 3 }}>{description}</P>}
          avatar={avatar ? <Avatar src={avatar} /> : undefined}
        />
      </Card>
    </a>
  );
};
