import { List } from "antd";
import dateFormat from "dateformat";
import React from "react";
import { VideoWithChannel } from "../content/youtube/types";
import { VideoThumbnail } from "./VideoThumbnail";

export type YouTubeListProps = {
  playlistItems: VideoWithChannel[];
};

export const YouTubeList: React.FC<YouTubeListProps> = ({ playlistItems }) => {
  const VideoList = (
    <List
      loading={playlistItems.length === 0}
      dataSource={playlistItems}
      itemLayout="horizontal"
      renderItem={({ video, channel }) => {
        const link = `https://www.youtube.com/watch?v=${video.contentDetails.videoId}`;
        return (
          <List.Item
            key={video.id}
            extra={
              <a href={link} rel="noopener noreferrer" target="_blank">
                <VideoThumbnail
                  width={200}
                  alt={video.snippet.title}
                  thumbnails={video.snippet.thumbnails}
                />
              </a>
            }
          >
            <List.Item.Meta
              title={
                <a href={link} rel="noopener noreferrer" target="_blank">
                  {video.snippet.title}
                </a>
              }
              description={dateFormat(video.snippet.publishedAt)}
            />
          </List.Item>
        );
      }}
    />
  );
  return <div>{VideoList}</div>;
};
