import { Carousel, Divider, Space, Typography } from "antd";
import React, { useEffect } from "react";
import { fetchLatestVideos } from "../content/youtube";
import { YouTubeCard } from "../SocialComponent/YouTubeCard";
import type { VideoWithChannel } from "../content/youtube/types";
import { AboutPanel, BisectPanel, DiscordWidget } from "../panels";

const { Paragraph: P } = Typography;

export const HomePage: React.FC = () => {
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
    <>
      <div className="center">
        <h1 className="home-title">Iron Assembly</h1>
        {/* TODO: Add randomly generated catchphrases */}
        <P type="secondary"></P>{" "}
      </div>
      <Divider>Latest Content</Divider>
      <Carousel autoplay effect="fade" className="center">
        {carouselItems}
      </Carousel>
      <Divider />
      <AboutPanel />
      <Divider />
      <Space wrap style={{ margin: "auto" }}>
        {/* <DiscordInvite /> */}
        <DiscordWidget />
        <BisectPanel />
      </Space>
    </>
  );
};
