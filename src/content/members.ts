export type User = {
  username: string;
  uuid: string;
  active: boolean;
};

export const users: User[] = [
  {
    active: true,
    username: "Veeq",
    uuid: "4ada8e80-497b-4137-8a95-2cc3757413e6",
  },
  {
    active: true,
    username: "fusion",
    uuid: "8d5d21ce-3f02-4994-bfcc-0bc57e82fc6c",
  },
  {
    active: true,
    username: "boredy",
    uuid: "63ede22f-69a7-429e-960b-1a3410cb660e",
  },
  {
    active: true,
    username: "XxxSalvador",
    uuid: "06695828-9677-4892-8f98-8e254febc6c5",
  },
  {
    active: true,
    username: "Coconut_Beast",
    uuid: "1873c79d-c48c-418a-9b02-3114ed338b9a",
  },
  {
    active: true,
    username: "Darrix2364",
    uuid: "af3edba7-94f4-494b-8235-16f727ccadab",
  },
  {
    active: true,
    username: "DMoney6",
    uuid: "e4af981b-8c65-4f26-b97d-02fa4dc3b4df",
  },
  {
    active: true,
    username: "_mid_knight_",
    uuid: "a2208746-25c9-4abf-a76b-31390b9d67b1",
  },
];

export const getUser = (term: string): User | undefined => {
  return users.find((user) => user.username === term || user.uuid === term);
};
