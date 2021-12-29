import React from "react";
import { Typography } from "antd";
import type { YoutubeVideoSnippet } from "youtube.ts";

const { Link: A } = Typography;

export type VideoThumbnailProps = {
  thumbnails: YoutubeVideoSnippet["thumbnails"];
  alt: string;
  width?: number;
  link?: string;
  isCover?: boolean;
};

export const VideoThumbnail: React.FC<VideoThumbnailProps> = ({
  thumbnails,
  alt,
  width,
  link = "",
  isCover = false,
}) => {
  const image = thumbnails.maxres || thumbnails.high;
  const imageLink = image.url;

  return (
    <A href={link}>
      <img
        className={`video-thumbnail ${isCover ? "cover-content" : ""}`}
        width={width}
        alt={alt}
        src={imageLink}
      />
    </A>
  );
};
