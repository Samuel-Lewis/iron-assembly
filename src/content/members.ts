export type SocialLink = {
  id: string;
};

export type User = {
  username: string;
  creator: boolean;
  socials: { minecraft: SocialLink; [key: string]: SocialLink };
  description?: string;
};

export const users: User[] = [
  {
    creator: true,
    username: "Veeq",
    socials: {
      minecraft: { id: "4ada8e80-497b-4137-8a95-2cc3757413e6" },
      twitter: { id: "VeeqPlays" },
      youtube: { id: "UCeT-ST2d4VlwOi7JU1o148w" },
      twitch: { id: "veeqplays" },
    },
  },
  {
    creator: false,
    username: "fusion",
    socials: {
      minecraft: { id: "8d5d21ce-3f02-4994-bfcc-0bc57e82fc6c" },
    },
  },
  {
    creator: false,
    username: "boredy",
    socials: {
      minecraft: { id: "63ede22f-69a7-429e-960b-1a3410cb660e" },
    },
  },
  {
    creator: false,
    username: "XxxSalvador",
    socials: {
      minecraft: { id: "06695828-9677-4892-8f98-8e254febc6c5" },
    },
  },
  {
    creator: true,
    username: "Coconut_Beast",
    socials: {
      minecraft: { id: "1873c79d-c48c-418a-9b02-3114ed338b9a" },
      youtube: { id: "UCn6dT3-it_j7uJ2ZUXmBqJQ" },
      twitch: { id: "coconut_beast" },
      instagram: { id: "the_coconut_beast" },
    },
  },
  {
    creator: true,
    username: "Darrix2364",
    socials: {
      minecraft: { id: "af3edba7-94f4-494b-8235-16f727ccadab" },
      youtube: { id: "UCJ13xqeoVJJtd7r5pb8myJg" },
      twitch: { id: "darrix2364" },
    },
  },
  {
    creator: false,
    username: "DMoney6",
    socials: {
      minecraft: { id: "e4af981b-8c65-4f26-b97d-02fa4dc3b4df" },
    },
  },
  {
    creator: false,
    username: "_mid_knight_",
    socials: {
      minecraft: { id: "a2208746-25c9-4abf-a76b-31390b9d67b1" },
    },
  },
  {
    creator: false,
    username: "emanemone",
    socials: {
      minecraft: { id: "b95c2f80-66e0-4561-81a3-8dd671bc5065" },
    },
  },
];

export const getUser = (term: string): User | undefined => {
  return users.find((user) => user.username === term);
};

export const getIdsBySocial = (social: string): string[] => {
  return users.reduce((acc, user) => {
    if (user.socials[social]) {
      acc.push(user.socials[social].id);
    }
    return acc;
  }, [] as string[]);
};
