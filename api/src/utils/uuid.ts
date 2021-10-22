import ShortUniqueId from 'short-unique-id';

export const uuid = (): string => {
  const uid = new ShortUniqueId({ length: 10 });
  return uid();
};
