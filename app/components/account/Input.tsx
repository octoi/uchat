import React, { Dispatch, SetStateAction } from 'react';
import { Input as ChakraInput } from '@chakra-ui/react';

interface Props {
  placeholder: string;
  type?: 'text' | 'password' | 'email';
  className?: string;
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  isDisabled?: boolean;
}

export default function Input({
  placeholder,
  type,
  className,
  state,
  setState,
  isDisabled,
}: Props) {
  return (
    <ChakraInput
      type={type ? type : 'text'}
      required
      placeholder={placeholder}
      value={state}
      onChange={(e) => setState(e.target.value)}
      variant='filled'
      mt={4}
      className={`${className} p-7`}
      focusBorderColor='teal.400'
      autoComplete='on'
      disabled={isDisabled}
    />
  );
}
