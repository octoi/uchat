import { UserInputError } from 'apollo-server-errors';
import { loginArgs, registerArgs } from '../../utils/types';

export const validateLoginArgs = (args: loginArgs): loginArgs => {
  if (!args.email || !args.password) {
    throw new UserInputError('required fields not found');
  }

  return args;
};

export const validateRegisterArgs = (args: registerArgs): registerArgs => {
  if (!args.email || !args.name || !args.password || !args.profile) {
    throw new UserInputError('required fields not found');
  }

  return args;
};

export const validateGetUserArgs = (args: any): string => {
  if (!args.email) {
    throw new UserInputError('Email is not provided');
  }

  return args.email;
};
