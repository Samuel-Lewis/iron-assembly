import axios from "axios";
import Cache from "cache";
import { getIdsBySocial } from "../members";
import {
  LatestVideosOptions,
  YouTubeData
} from "./types";

const youtubeCache = new Cache(10 * 60 * 1000); // 10 minutes TTL

const youtubeUrl = "https://www.youtube.com/feeds/videos.xml?channel_id=";
const rss2jsonUrl = "https://api.rss2json.com/v1/api.json";

export const fetchChannelData = async (
  channelId: string
): Promise<YouTubeData> => {
  const cacheData = youtubeCache.get(channelId);
  if (cacheData) {
    return cacheData;
  }

  const response = await axios.get(rss2jsonUrl, {
    params: {
      rss_url: youtubeUrl + channelId,
    },
  });

  const data = response.data as YouTubeData;
  const timeZoneOffset = new Date().getTimezoneOffset() * 60 * 1000;
  data.items.forEach((item, i, arr) => {
    // Date processing
    const date = Number(new Date(item.pubDate)) - timeZoneOffset;
    arr[i].pubDate = new Date(date);

    // Thumbnail processing
    arr[i].thumbnail = item.thumbnail.replace("hqdefault", "maxresdefault");
  });

  youtubeCache.put(channelId, data);
  console.log(data);
  return data;
};

export const fetchLatestVideos = async ({
  maxResults,
  channelIds = [],
}: LatestVideosOptions) => {
  const ids = channelIds.length > 0 ? channelIds : getIdsBySocial("youtube");
  const requests = await Promise.all(ids.map(fetchChannelData));
  const sorted = requests
    .map((channel) => channel.items)
    .flat()
    .sort((a, b) => {
      return Number(new Date(b.pubDate)) - Number(new Date(a.pubDate));
    });

  if (maxResults) {
    return sorted.slice(0, maxResults);
  }
  return sorted;
};
