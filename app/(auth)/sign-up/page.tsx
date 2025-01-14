'use client';

import React from 'react';
import AuthForm from '@/components/AuthForm';
import { signUpSchema } from '@/lib/validations';

const Page = () => {
  return (
    <AuthForm
      type="sign-up"
      schema={signUpSchema}
      defaultValues={{
        email: '',
        password: '',
        fullName: '',
        universityId: '',
        universityCard: '',
      }}
      onSubmit={() => {}}
    />
  );
};
export default Page;
