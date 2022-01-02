import {
    Divider,
    Space,
    Typography
} from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import { Link } from "react-router-dom";
import { users } from "../content";

const { Title, Paragraph: P } = Typography;

export const MembersPage: React.FC = () => {
  const creators = users
    .filter((u) => u.creator)
    .sort((a, b) => a.username.localeCompare(b.username))
    .map((u) => (
      <Link to={`/members/${u.username}`} key={u.username}>
        <Space align="center" direction="vertical" className="avatar-render">
          <img
            src={`https://crafatar.com/renders/body/${u.socials.minecraft.id}?overlay`}
            alt={u.username}
            className="paper-hover"
          />
          <Title level={3}>{u.username}</Title>
        </Space>
      </Link>
    ));

  const nonCreators = users
    .filter((u) => !u.creator)
    .sort((a, b) => a.username.localeCompare(b.username))
    .map((u) => {
      return (
        <Space key={u.username} align="center" direction="vertical">
          <Avatar
            shape="square"
            size={64}
            alt={u.username}
            src={`https://crafatar.com/renders/head/${u.socials.minecraft.id}?overlay&size=128`}
          />
          <P>{u.username}</P>
        </Space>
      );
    });

  return (
    <>
      <Title>Iron Assembly Members</Title>
      <Divider>Creators</Divider>
      <div className="center">
        <Space size="large" wrap>
          {creators}
        </Space>
      </div>
      <Divider>Players</Divider>
      <div className="center">
        <Space wrap>{nonCreators}</Space>
      </div>
    </>
  );
};
