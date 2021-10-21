import { UserInputError } from 'apollo-server-errors';
import { loginUser, registerUser } from '../models/user.model';
import { generateToken } from '../utils/jwt';
import { loginArgs, registerArgs } from '../utils/types';

export const registerController = async (args: registerArgs) => {
  const user: any = await registerUser(args).catch((err) => {
    throw new UserInputError(err);
  });

  return {
    ...user,
    token: generateToken(user),
  };
};

export const loginController = async (args: loginArgs) => {
  const user: any = await loginUser(args).catch((err) => {
    throw new UserInputError(err);
  });

  return {
    ...user,
    token: generateToken(user),
  };
};
