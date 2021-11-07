export const getUserAvatar = (name: string): string => {
  return encodeURI(`https://avatars.dicebear.com/api/identicon/${name}.svg`);
};

export const getRoomAvatar = (title: string): string => {
  return encodeURI(
    `https://avatars.dicebear.com/api/adventurer-neutral/${title}.svg`
  );
};
