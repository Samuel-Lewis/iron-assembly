import React from "react";
import { Typography } from "antd";
import type { YoutubeVideoSnippet } from "youtube.ts";

const { Link: A } = Typography;

export type VideoThumbnailProps = {
  thumbnails: YoutubeVideoSnippet["thumbnails"];
  alt: string;
  width?: number;
  link?: string;
};

export const VideoThumbnail: React.FC<VideoThumbnailProps> = ({
  thumbnails,
  alt,
  width = 600,
  link = "",
}) => {
  const image = thumbnails.maxres || thumbnails.high;
  const imageLink = image.url;

  return (
    <A href={link}>
      <img
        className={`video-thumbnail`}
        alt={alt}
        width={width}
        src={imageLink}
      />
    </A>
  );
};
