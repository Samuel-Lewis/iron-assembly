import { Space } from "antd";
import React from "react";
import { users } from "../content";

export const HeadsPanel: React.FC = () => {
  const heads = users
    .sort((a, b) => a.username.localeCompare(b.username))
    .map((u) => (
      <img
        key={u.username}
        width={42}
        src={`https://crafatar.com/avatars/${u.socials.minecraft.id}?overlay&size=42`}
        alt=""
      />
    ));

  return (
    <Space wrap align="baseline">
      {heads}
    </Space>
  );
};
