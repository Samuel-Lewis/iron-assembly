import React from "react";
import { Tag } from "antd";
import {
  TwitterOutlined,
  YoutubeOutlined,
  CameraOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import type { User } from "../content/members";

export type BadgeProps = {
  color: string;
  icon: React.ReactElement;
  link: string;
  display: string;
};

export const SocialBadge: React.FC<BadgeProps> = ({
  color,
  icon,
  link,
  display,
}) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Tag icon={icon} color={color}>
        {display}
      </Tag>
    </a>
  );
};

export type DirectBadgeProps = {
  username: string;
};

export const TwitterBadge: React.FC<DirectBadgeProps> = ({ username }) => (
  <SocialBadge
    color="#1DA1F2"
    icon={<TwitterOutlined />}
    link={`https://twitter.com/${username}`}
    display="Twitter"
  />
);

export const YoutubeBadge: React.FC<DirectBadgeProps> = ({ username }) => (
  <SocialBadge
    color="#FF0000"
    icon={<YoutubeOutlined />}
    link={`https://youtube.com/channel/${username}`}
    display="YouTube"
  />
);

export const TwitchBadge: React.FC<DirectBadgeProps> = ({ username }) => (
  <SocialBadge
    color="#9146ff"
    // FIXME: Find a real Twitch icon
    icon={<CameraOutlined />}
    link={`https://www.twitch.tv/${username}`}
    display="Twitch"
  />
);

export const InstagramBadge: React.FC<DirectBadgeProps> = ({ username }) => (
  <SocialBadge
    color="#30618A"
    icon={<InstagramOutlined />}
    link={`https://www.instagram.com/${username}`}
    display="Instagram"
  />
);

export type SocialBadgesProps = {} & User["socials"];
export const SocialBadges: React.FC<SocialBadgesProps> = ({
  twitter,
  youtube,
  twitch,
  instagram,
}) => {
  return (
    <>
      {youtube && <YoutubeBadge username={youtube.id} />}
      {twitch && <TwitchBadge username={twitch.id} />}
      {twitter && <TwitterBadge username={twitter.id} />}
      {instagram && <InstagramBadge username={instagram.id} />}
    </>
  );
};
