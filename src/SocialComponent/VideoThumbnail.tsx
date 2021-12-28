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
  // FIXME: Fix black bards on `high` quality
  const link = thumbnails.maxres?.url || thumbnails.high.url;
  return <img width={width} alt={alt} src={link} />;
};
