import { Typography, Button } from "antd";
import React from "react";

const { Paragraph: P } = Typography;

export const DiscordWidget: React.FC = () => {
  return (
    <div className="center panel">
      <iframe
        title="Discord widget"
        src="https://discord.com/widget?id=913327234733973555&theme=dark"
        width="400"
        height="300"
        frameBorder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      />
    </div>
  );
};

export const DiscordInvite: React.FC = () => {
  return (
    <div className="center panel">
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
