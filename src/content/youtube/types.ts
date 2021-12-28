import type { YoutubeChannel, YoutubePlaylistItem } from "youtube.ts";

export type LatestVideosOptions = {
  maxResults?: number;
  channelIds?: string[];
};

export type VideoWithChannel = {
  channel: YoutubeChannel;
  video: YoutubePlaylistItem;
};
