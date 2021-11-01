import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
  mutation (
    $name: String
    $email: String
    $profile: String
    $password: String
  ) {
    registerUser(
      name: $name
      email: $email
      profile: $profile
      password: $password
    ) {
      id
      email
      name
      profile
      token
    }
  }
`;

export const LOGIN_USER = gql`
  mutation ($email: String, $password: String) {
    loginUser(email: $email, password: $password) {
      id
      email
      name
      profile
      token
    }
  }
`;

export const UPDATE_USER = gql`
  mutation (
    $name: String
    $email: String
    $profile: String
    $isNewPassword: Boolean
    $password: String
  ) {
    updateUser(
      name: $name
      email: $email
      profile: $profile
      isNewPassword: $isNewPassword
      password: $password
    ) {
      id
      name
      email
      profile
      token
    }
  }
`;
