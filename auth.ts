import NextAuth from 'next-auth';

import prisma from './lib/prisma';

import { PrismaAdapter } from '@auth/prisma-adapter';

import authConfig from './auth.config';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(prisma),

  session: { strategy: 'jwt' },

  ...authConfig,

  callbacks: {
    async session({ session, token }) {
      console.log({ token });

      if (token.sub && session.user) session.user.id = token.sub;

      if (token.role && session.user) session.user.role = token.role;

      return session;
    },

    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await prisma.user.findUnique({
        where: { id: token.sub },
      });

      if (!existingUser) return token;

      token.role = existingUser.role;

      return token;
    },
  },
});
