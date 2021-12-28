import { Card, Avatar } from "antd";
import React from "react";
import type { YoutubePlaylistItem, YoutubeChannel } from "youtube.ts";
import { VideoThumbnail } from "./VideoThumbnail";

const { Meta } = Card;

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
      <Card
        className="youtube-card-details"
        cover={<VideoThumbnail alt={title} thumbnails={thumbnails} />}
      >
        <Meta
          title={title}
          description={description}
          avatar={avatar ? <Avatar src={avatar} /> : undefined}
        />
      </Card>
    </a>
  );
};
