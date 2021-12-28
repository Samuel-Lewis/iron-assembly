import { Carousel, Space, Typography } from "antd";
import React, { useEffect } from "react";
import { fetchLatestVideos } from "../content/youtube";
import { YouTubeCard } from "../SocialComponent/YouTubeCard";
import type { VideoWithChannel } from "../content/youtube/types";

const { Title } = Typography;

export const HomePage = () => {
  const [latestVideos, setLatestVideos] = React.useState<VideoWithChannel[]>(
    []
  );
  useEffect(() => {
    fetchLatestVideos({ maxResults: 5 }).then((videos) => {
      setLatestVideos(videos);
    });
  }, [setLatestVideos]);

  const carouselItems = latestVideos.map((vcd) => (
    <YouTubeCard video={vcd.video} channel={vcd.channel} key={vcd.video.id} />
  ));

  return (
    <div className="homepage">
      <Title>Iron Assembly</Title>
      <Space wrap align="start">
        <div style={{ width: "534px" }}>
          <Carousel autoplay>{carouselItems}</Carousel>
        </div>
        <iframe
          title="Discord widget"
          src="https://discord.com/widget?id=913327234733973555&theme=dark"
          width="350"
          height="300"
          frameBorder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        />
      </Space>
    </div>
  );
};
