import { FormEvent } from 'react';
import { NextPage } from 'next';
import { useState } from '@hookstate/core';
import Layout from '@/components/Layout';
import Input from '@/components/account/Input';

const Register: NextPage = () => {
  const nameState = useState('');
  const emailState = useState('');
  const passwordState = useState('');

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <div className='h-screen flex justify-center items-center'>
        <form
          className='bg-gray-900 p-8 rounded-md  flex flex-col w-full max-w-lg'
          onSubmit={handleFormSubmit}
        >
          <h2 className='text-3xl font-bold'>Register</h2>
          <Input
            placeholder='Name'
            className='mt-6'
            state={nameState.get()}
            setState={nameState.set}
          />
          <Input
            placeholder='Email'
            className='mt-3'
            type='email'
            state={emailState.get()}
            setState={emailState.set}
          />
          <Input
            placeholder='Password'
            className='mt-3'
            type='password'
            state={passwordState.get()}
            setState={emailState.set}
          />
          <button
            type='submit'
            className='mt-6 w-full bg-green-400 text-gray-900 font-medium p-4 rounded-md transition duration-500 hover:bg-green-500'
          >
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
