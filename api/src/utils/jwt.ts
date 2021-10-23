import { AuthenticationError, ExpressContext } from 'apollo-server-express';
import jwt from 'jsonwebtoken';

const jwtKey = process.env.JWT_KEY || 'n3v3r g0nn4 g1v3 y0u up';

export const generateToken = (data: any): string => {
  delete data?.password; // Password hash of user is in data btw
  return jwt.sign(data, jwtKey, { expiresIn: '1h' });
};

export const getUserFromContext = (context: ExpressContext) => {
  const token = getTokenFromHeader(context);

  try {
    const user = jwt.verify(token, jwtKey);
    return user;
  } catch (error) {
    throw new AuthenticationError('Invalid/Expired token');
  }
};

export const getTokenFromHeader = (context: ExpressContext): string => {
  const authHeader = context.req.headers.authorization;
  if (!authHeader) throw new Error('Authorization header must be provided');

  const token = authHeader.split('Bearer ')[1];
  if (!token) throw new Error("Authentication must be 'Bearer [token]'");

  return token;
};
