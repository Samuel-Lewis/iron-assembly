import React from "react";
import type { YoutubeVideoSnippet } from "youtube.ts";


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
    <a href={link} rel="noopener noreferrer" target="_blank">
      <img
        className={`video-thumbnail`}
        alt={alt}
        width={width}
        src={imageLink}
      />
    </a>
  );
};
