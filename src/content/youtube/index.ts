import { getIdsBySocial } from "../members";
import { LatestVideosOptions, VideoWithChannel } from "./types";
import mem from "mem";
import YouTube from "youtube.ts";

const youtube = new YouTube(process.env.REACT_APP_GOOGLE_API_KEY);

export const getUploadPlaylistId = mem(
  async (channelId: string) => {
    const channelData = await fetchChannelData(channelId);
    return channelData.contentDetails.relatedPlaylists.uploads;
  },
  { maxAge: 10 * 60 * 1000 } // 10 minutes
);

export const getPlaylistContent = mem(
  async (playlistId: string) => {
    const ls = localStorage.getItem(`youtube-playlist-${playlistId}`);
    if (ls) {
      return JSON.parse(ls);
    }

    const items = (
      await youtube.playlists.items(
        `https://www.youtube.com/playlist?list=${playlistId}`
      )
    ).items;

    localStorage.setItem(
      `youtube-playlist-${playlistId}`,
      JSON.stringify(items)
    );
    return items;
  },
  { maxAge: 10 * 60 * 1000 } // 10 minutes
);

export const fetchChannelData = mem(
  async (channelId: string) => {
    const ls = localStorage.getItem(`youtube-channel-${channelId}`);
    if (ls) {
      return JSON.parse(ls);
    }

    const channel = await youtube.channels.get(
      `https://www.youtube.com/channel/${channelId}`
    );

    localStorage.setItem(
      `youtube-channel-${channelId}`,
      JSON.stringify(channel)
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
