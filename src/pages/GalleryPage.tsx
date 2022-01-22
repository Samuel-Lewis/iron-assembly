import {
    Image,
    Space
} from "antd";
import React from "react";

export type GalleryImage = {
  url: string;
  name: string;
};

const images: GalleryImage[] = [
  { url: "https://i.imgur.com/cQsb6f1.jpg", name: "Sacred spawn island" },

  { url: "https://i.imgur.com/wi62lrF.jpg", name: "Northwall before Mount " },
  {
    url: "https://i.imgur.com/RhmXf8A.jpg",
    name: "Aurora above Northwall and DMoney Mansion",
  },
  { url: "https://i.imgur.com/lkp7PXO.jpg", name: "Northwall cosy storage" },
  { url: "https://i.imgur.com/PMAQTHU.jpg", name: "Northwall at night" },
  { url: "https://i.imgur.com/YpeH9wB.jpg", name: "Northwall markets" },
  { url: "https://i.imgur.com/gONxXmg.jpg", name: "Boredy's domain" },
  { url: "https://i.imgur.com/LKIDKlE.jpg", name: "Boredy's potion emporium" },
  { url: "https://i.imgur.com/vLBisvA.jpg", name: "DMoney Mansion" },
  { url: "https://i.imgur.com/EUfdKER.jpg", name: "DMoney docks" },
  { url: "https://i.imgur.com/W7T3BIr.jpg", name: "Salvador's home" },
  { url: "https://i.imgur.com/9AMRoG9.jpg", name: "The stage" },
  { url: "https://i.imgur.com/n2hu17b.jpg", name: 'Coconut\'s "starter" home' },
  { url: "https://i.imgur.com/ajFXWVD.jpg", name: "Mystery's below" },
  { url: "https://i.imgur.com/ZHDQmRt.jpg", name: "Coconut's Christmas tree" },
  { url: "https://i.imgur.com/hG2p81a.jpg", name: "Bridge to Coconut's house" },
  { url: "https://i.imgur.com/Wpz1vLW.jpg", name: "_mid_knight_ in a village" },
  { url: "https://i.imgur.com/7NKZrUv.jpg", name: "Sunrise over a hill" },
  {
    url: "https://i.imgur.com/zHKBcVO.jpg",
    name: "Dragon Egg in front of Mt Irrimond",
  },
];

export const GalleryPage: React.FC = () => {
  const content = images.map(({ url, name }) => (
    <Image src={url} alt={name} width={300} key={url} />
  ));

  return (
    <Image.PreviewGroup>
      <Space wrap>{content}</Space>
    </Image.PreviewGroup>
  );
};
