import React, { Dispatch, SetStateAction } from 'react';

interface Props {
  placeholder: string;
  type?: 'text' | 'password' | 'email';
  className?: string;
  state: string;
  setState: Dispatch<SetStateAction<string>>;
}

export default function Input({
  placeholder,
  type,
  className,
  state,
  setState,
}: Props) {
  return (
    <input
      type={type ? type : 'text'}
      required
      placeholder={placeholder}
      className={`${className} p-4 rounded-md outline-none transition bg-gray-800 border border-gray-800 focus:border-green-400`}
      value={state}
      onChange={(e) => setState(e.target.value)}
    />
  );
}
