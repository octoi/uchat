import { UserInputError, HttpQueryError } from 'apollo-server-core';
import { generateToken } from '../utils/jwt';
import { loginArgs, registerArgs, updateArgs } from '../utils/types';
import {
  findUser,
  getJoinedRooms,
  loginUser,
  registerUser,
  updateUser,
} from '../models/user.model';

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

export const getUserController = async (email: string) => {
  const user: any = await findUser(email).catch((err) => {
    throw new UserInputError(err);
  });

  return user;
};

export const getJoinedRoomsController = async (userId: number) => {
  const joinedRooms: any = await getJoinedRooms(userId).catch((err) => {
    throw new HttpQueryError(500, err);
  });

  return joinedRooms;
};
