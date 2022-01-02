import {
    Divider,
    Typography
} from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { HeadsPanel } from "./HeadsPanel";

const { Title, Paragraph: P, Link: A } = Typography;

export const AboutPanel: React.FC = () => {
  return (
    <div className="center panel-about-wrapper">
      <div className="panel-about">
        <Title>What is Iron Assembly?</Title>
        <HeadsPanel />
        <Divider />
        <P>
          <i>Iron Assembly</i> is a group of{" "}
          <Link to="/members">creators and players</Link> focussed on making
          enjoyable and engaging gaming content. Mainly focussed on Minecraft
          game play, we are on YouTube, but you might also see us around on
          Twitch or Instagram.
        </P>
        <P>
          Currently the Minecraft SMP has a whitelist and is not accepting new
          players. If you're really keen on getting involved, join the{" "}
          <A
            href="https://discord.com/invite/xpCGZevjVc"
            rel="noopener noreferrer"
            target="_blank"
          >
            Discord
          </A>{" "}
          and come say hi!
        </P>
        <P>
          <A href={process.env.PUBLIC_URL}>ironassembly.com</A> is maintained by
          Veeq, so reach out if there are any issues. Thank you to{" "}
          <A
            href="https://crafatar.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Crafatar
          </A>{" "}
          for providing avatars.
        </P>
      </div>
    </div>
  );
};
