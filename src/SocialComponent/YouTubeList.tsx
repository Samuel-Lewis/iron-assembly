import { List } from "antd";
import dateFormat from "dateformat";
import React, {
  useEffect,
  useState
} from "react";
import { fetchChannelData } from "../content/youtube";

import type { YouTubeData } from "../content/youtube/types";

export type YouTubeListProps = {
  userId: string;
};

export const YouTubeList: React.FunctionComponent<YouTubeListProps> = ({
  userId,
}) => {
  const [data, setData] = useState<YouTubeData | undefined>();
  useEffect(() => {
    if (!userId) {
      return;
    }
    // TODO: Should start using fetchLatestVideos
    fetchChannelData(userId).then((d) => {
      setData(d);
    });
  }, [setData, userId]);

  if (!userId) {
    return null;
  }

  const dataSource = data?.items ?? [];

  // List
  const VideoList = (
    <List
      loading={dataSource.length === 0}
      dataSource={dataSource}
      itemLayout="horizontal"
      pagination={{
        pageSize: 5,
        size: "small",
      }}
      renderItem={(item) => (
        <List.Item
          key={item.title}
          extra={
            <a href={item.link} rel="noopener noreferrer" target="_blank">
              <img
                width={272}
                alt={"Thumbnail for " + item.title}
                src={item.thumbnail}
              />
            </a>
          }
        >
          <List.Item.Meta
            title={
              <a href={item.link} rel="noopener noreferrer" target="_blank">
                {item.title}
              </a>
            }
            description={dateFormat(item.pubDate)}
          />
        </List.Item>
      )}
    />
  );

  return <div>{VideoList}</div>;
};
