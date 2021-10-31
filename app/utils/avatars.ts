export const getUserAvatar = (name: string): string => {
  return `https://avatars.dicebear.com/api/initials/${name}.svg`;
};

export const getRoomAvatar = (title: string): string => {
  return `https://avatars.dicebear.com/api/adventurer-neutral/${title}.svg`;
};
