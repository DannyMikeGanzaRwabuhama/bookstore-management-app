'use client';

import React from 'react';
import AuthForm from '@/components/AuthForm';
import { signInSchema } from '@/lib/validations';

const Page = () => {
  return (
    <AuthForm
      type="sign-in"
      schema={signInSchema}
      defaultValues={{
        email: '',
        password: '',
      }}
      onSubmit={() => {}}
    />
  );
};
export default Page;
