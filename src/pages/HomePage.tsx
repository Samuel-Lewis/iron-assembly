import {
  Carousel,
  Divider,
  Space,
  Typography
} from "antd";
import React, { useEffect } from "react";
import { fetchLatestVideos } from "../content/youtube";
import { YouTubeVideo } from "../content/youtube/types";
import { YouTubeCard } from "../SocialComponent/YouTubeCard";

const { Title } = Typography;

export const HomePage = () => {
  const [latestVideos, setLatestVideos] = React.useState<YouTubeVideo[]>([]);
  useEffect(() => {
    fetchLatestVideos({ maxResults: 5 }).then((videos) => {
      setLatestVideos(videos);
    });
  }, [setLatestVideos]);

  const carouselItems = latestVideos.map((video) => (
    <YouTubeCard video={video} key={video.title} />
  ));

  return (
    <div className="homepage">
      <Title>Iron Assembly</Title>
      <Divider orientation="left">Latest Videos</Divider>
      <div style={{ width: "534px" }} className="video-carousel">
        <Carousel autoplay dots={{ className: "carousel-dots" }}>
          {carouselItems}
        </Carousel>
      </div>
      <Divider orientation="left">Socials</Divider>
      <Space direction="horizontal" wrap>
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
