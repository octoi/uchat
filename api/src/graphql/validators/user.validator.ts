import { UserInputError } from 'apollo-server-errors';
import { registerArgs } from '../../utils/types';

export const validateRegisterArgs = (args: registerArgs): registerArgs => {
  if (!args.email || !args.name || !args.password || !args.profile) {
    throw new UserInputError('required fields not found');
  }

  return args;
};
