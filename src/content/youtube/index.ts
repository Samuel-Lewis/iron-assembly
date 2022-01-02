import mem from "mem";
import YouTube from "youtube.ts";
import { getIdsBySocial } from "../members";
import {
    LatestVideosOptions,
    VideoWithChannel
} from "./types";

const youtube = new YouTube(process.env.REACT_APP_GOOGLE_API_KEY);

export const getUploadPlaylistId = async (channelId: string) => {
  const channelData = await fetchChannelData(channelId);
  return channelData.contentDetails.relatedPlaylists.uploads;
};

export const getPlaylistContent = mem(
  async (playlistId: string) => {
    const items = (
      await youtube.playlists.items(
        `https://www.youtube.com/playlist?list=${playlistId}`
      )
    ).items;
    return items;
  },
  { maxAge: 10 * 60 * 1000 } // 10 minutes
);

export const fetchChannelData = mem(
  async (channelId: string) => {
    const channel = await youtube.channels.get(
      `https://www.youtube.com/channel/${channelId}`
    );
    return channel;
  },
  { maxAge: 10 * 60 * 1000 } // 10 minutes
);

export const fetchLatestVideos = async ({
  maxResults,
  channelIds,
}: LatestVideosOptions): Promise<VideoWithChannel[]> => {
  const ids = channelIds ?? getIdsBySocial("youtube");

  const playlistIds = await Promise.all(ids.map(getUploadPlaylistId));
  const videos = (await Promise.all(playlistIds.map(getPlaylistContent)))
    .flat()
    .sort((a, b) => {
      return (
        new Date(b.snippet.publishedAt).getTime() -
        new Date(a.snippet.publishedAt).getTime()
      );
    })
    .slice(0, maxResults);

  return await Promise.all(
    videos.map(async (video) => {
      const channel = await fetchChannelData(video.snippet.channelId);
      return {
        video,
        channel,
      };
    })
  );
};
