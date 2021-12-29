import { Divider, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import React from "react";
import { users } from "../content";

const { Title, Paragraph: P, Link: A } = Typography;

export const AboutPage: React.FC = () => {
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
    <div className="page-about-content center">
      <Title>About the Iron Assembly</Title>
      <Space>{heads}</Space>
      <Divider />
      <P>
        <i>Iron Assembly</i> is a group of{" "}
        <Link to="/members">creators and players</Link> focussed on making
        enjoyable and engaging gaming content. We are predominantly on YouTube,
        but you might also see us around on Twitch or Instagram.
      </P>
      <P>
        Currently the Minecraft SMP has a whitelist and is not accepting new
        players. If you're really keen on getting involved, join the{" "}
        <A href="https://discord.com/invite/xpCGZevjVc">Discord</A> and get in
        say Hi!
      </P>
      <P>
        <A href={process.env.PUBLIC_URL}>ironassembly.com</A> is maintained by
        Veeq, so reach out if there are any issues. Thank you to{" "}
        <A href="https://crafatar.com">Crafatar</A> for providing avatars.
      </P>

      <Divider />
      <P>
        All servers with Iron Assembly are hosted with{" "}
        <A href="https://www.bisecthosting.com/clients/aff.php?aff=4183">
          Bisect Hosting (affiliate link)
        </A>
        , and is also recommended for you.
      </P>
      <A href="https://www.bisecthosting.com/clients/aff.php?aff=4183">
        <img
          width={300}
          src="https://www.bisecthosting.com/images/logos/logo.svg"
          alt=""
        />
      </A>
    </div>
  );
};
