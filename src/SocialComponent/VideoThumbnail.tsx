import React from "react";
import type { YoutubeVideoSnippet } from "youtube.ts";

export type VideoThumbnailProps = {
  thumbnails: YoutubeVideoSnippet["thumbnails"];
  alt: string;
  width?: number;
};

export const VideoThumbnail: React.FC<VideoThumbnailProps> = ({
  thumbnails,
  alt,
  width,
}) => {
  const image = thumbnails.maxres || thumbnails.high;
  const link = image.url;

  return <img width={width} alt={alt} src={link} className="video-thumbnail" />;
};
