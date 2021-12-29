import { Typography, Button } from "antd";
import React from "react";

const { Paragraph: P } = Typography;

export const DiscordWidget: React.FC = () => {
  return (
    <iframe
      title="Discord widget"
      src="https://discord.com/widget?id=913327234733973555&theme=dark"
      width="350"
      height="300"
      frameBorder="0"
      sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
    />
  );
};

export const DiscordInvite: React.FC = () => {
  return (
    <div className="center">
      <P>Want to come say hi? Join the Discord!</P>
      <Button
        type="primary"
        block
        style={{ backgroundColor: "#7289da" }}
        href="https://discord.com/invite/xpCGZevjVc"
      >
        Join
      </Button>
    </div>
  );
};
