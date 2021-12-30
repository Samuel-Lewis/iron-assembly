import { Typography } from "antd";
import React from "react";

const { Title, Paragraph: P, Link: A } = Typography;

export const ModpackInfo: React.FC = () => {
  return (
    <div className="center panel panel-bordered">
      <P>Check out the official</P>
      <Title level={4}>
        <A href="https://www.curseforge.com/minecraft/modpacks/iron-assembly-community-pack" rel="noopener noreferrer" target="_blank">
          Iron Assembly Minecraft Modpack
        </A>
      </Title>
      <P>
        Designed to be a super <b>lightweight</b>, <b>performance</b> focussed,{" "}
        <b>vanilla</b> experience. It's intention is to help you and your
        friends get started in a 1.18 vanilla server as quick as possible.
      </P>
      <A href="https://www.curseforge.com/minecraft/modpacks/iron-assembly-community-pack" rel="noopener noreferrer" target="_blank">
        <img src="https://i.imgur.com/A8qQlIv.png" alt="" width={300} />
      </A>
    </div>
  );
};
