import { UserInputError } from 'apollo-server-errors';
import { loginUser, registerUser, updateUser } from '../models/user.model';
import { generateToken } from '../utils/jwt';
import { loginArgs, registerArgs, updateArgs } from '../utils/types';

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

export const updateController = async (args: updateArgs) => {
  const user: any = await updateUser(args).catch((err) => {
    throw new UserInputError(err);
  });

  return {
    ...user,
    token: generateToken(user),
  };
};
