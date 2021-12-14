export type FeedInfo = {
  author: string;
  description: string;
  image: string;
  link: string;
  title: string;
  url: string;
};

export type YouTubeVideo = {
  author?: string;
  guid: string;
  link: string;
  pubDate: Date;
  thumbnail: string;
  title: string;
};

export type YouTubeData = {
  feed: FeedInfo;
  items: YouTubeVideo[];
  status: string;
};

export type LatestVideosOptions = {
  maxResults?: number;
  channelIds?: string[];
};
