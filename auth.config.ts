import Credentials from 'next-auth/providers/credentials';

import prisma from './lib/prisma';

import type { NextAuthConfig } from 'next-auth';

import { loginSchema } from './schema/login-schema';
import { compareSync } from 'bcryptjs';

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validateFields = loginSchema.safeParse(credentials);

        if (validateFields.success) {
          const { email, password } = validateFields.data;

          const user = await prisma.user.findUnique({ where: { email } });

          if (!user?.email || !user?.password) return null;

          const passwordMatch = compareSync(password, user.password);

          if (passwordMatch) return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
