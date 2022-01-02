import { Typography } from "antd";
import React, {
    useEffect,
    useState
} from "react";

const { Title, Link: A } = Typography;

const phrases = [
  "Cowabunga babyyyy!!",
  "Done is better than perfect",
  "Have you got council approval for that?",
  "I'm having an identity crisis, but also, here's a chicken",
  "It's for CONTENT",
  "It's just a prank bro",
  "It's not clickbait if you're not clicking",
  "Just... one... more...",
  "No spoilers!",
  "Ocelots are like crisps. You can never just have one.",
  "One like = one more waffle in my tummy",
  "Paddington 2 is the Citizen Kane of our time",
  "Procrastination is just another way to waste time",
  "So I did some mining off camera...",
  "The factory must grow",
  "Welcome back to another episode",
  <>
    Nothing like a good old fashioned{" "}
    <A
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      rel="noopener noreferrer"
      target="_blank"
    >
      cat video
    </A>
  </>,
  <>
    Join the{" "}
    <A
      href="https://discord.com/invite/xpCGZevjVc"
      rel="noopener noreferrer"
      target="_blank"
    >
      Discord!
    </A>
  </>,
];

export const Catchphrase: React.FC = () => {
  const [phrase, setPhrase] = useState<string | JSX.Element>("");
  useEffect(() => {
    setPhrase(phrases[Math.floor(Math.random() * phrases.length)]);
  }, []);
  return (
    <Title italic level={4} type="secondary">
      "{phrase}"
    </Title>
  );
};
