import React, { Dispatch, SetStateAction } from 'react';
import { Input as ChakraInput } from '@chakra-ui/react';
import styles from '@/styles/Accounts.module.css';

interface Props {
  placeholder: string;
  type?: 'text' | 'password' | 'email';
  className?: string;
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  isDisabled?: boolean;
  required?: boolean;
  mt?: number;
}

export default function Input({
  placeholder,
  type,
  className,
  state,
  setState,
  isDisabled,
  required,
  mt,
}: Props) {
  return (
    <ChakraInput
      type={type ? type : 'text'}
      required={required}
      placeholder={placeholder}
      value={state}
      onChange={(e) => setState(e.target.value)}
      variant='filled'
      mt={mt ? mt : 4}
      className={`${className} ${styles.borderedInput}  p-7`}
      autoComplete='on'
      disabled={isDisabled}
    />
  );
}
