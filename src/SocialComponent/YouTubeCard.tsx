import { Card } from "antd";
import React from "react";
import { YouTubeVideo } from "../content/youtube/types";

const { Meta } = Card;

export type YouTubeCardProps = {
  video: YouTubeVideo;
};

export const YouTubeCard: React.FC<YouTubeCardProps> = ({ video }) => {
  return (
    <a href={video.link} target="_blank" rel="noopener noreferrer">
      <Card
        className="youtube-card-details"
        cover={<img src={video.thumbnail} alt={video.title} />}
      >
        <Meta title={video.title} description={video.author} />
      </Card>
    </a>
  );
};
