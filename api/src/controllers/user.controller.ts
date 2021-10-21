import { UserInputError } from 'apollo-server-errors';
import { registerUser } from '../models/user.model';
import { generateToken } from '../utils/jwt';
import { registerArgs } from '../utils/types';

export const registerController = async (args: registerArgs) => {
  const user: any = await registerUser(args).catch((err) => {
    throw new UserInputError(err);
  });

  return {
    ...user,
    token: generateToken(user),
  };
};
