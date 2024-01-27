'use server';

import * as z from 'zod';

import { loginSchema } from '@/schema/login-schema';

import { signIn } from '@/auth';

import { defaultLoginReirect } from '@/routes/route';

import { AuthError } from 'next-auth';

export const login = async (values: z.infer<typeof loginSchema>) => {
  const validatedFields = loginSchema.safeParse(values);

  if (!validatedFields.success) return { error: 'Invalid fields!' };

  const { email, password } = validatedFields.data;

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: defaultLoginReirect,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid credentials' };
        default:
          return { error: "Something wen't wrong!" };
      }
    }

    throw error;
  }
};
