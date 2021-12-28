import React from "react";
import TwitchEmbed from "react-twitch-embed-video";

export type TwitchPageProps = {
  channel: string;
};

export const TwitchPage: React.FC<TwitchPageProps> = ({ channel }) => {
  return (
    <TwitchEmbed
      channel={channel}
      muted
      theme="light"
      width="100%"
      height="800px"
    />
  );
};
