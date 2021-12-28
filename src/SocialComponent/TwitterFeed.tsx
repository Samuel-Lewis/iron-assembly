import React from "react";
import { Timeline } from "react-twitter-widgets";

export type TwitterFeedProps = {
  screenName: string;
};

export const TwitterFeed: React.FC<TwitterFeedProps> = ({ screenName }) => {
  return (
    <Timeline
      dataSource={{
        sourceType: "profile",
        screenName,
      }}
      options={{
        chrome: "noheader, nofooter",
        dnt: true,
        height: "800px",
      }}
    />
  );
};
