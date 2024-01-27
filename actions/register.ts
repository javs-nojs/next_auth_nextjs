'use server';

import * as z from 'zod';

import { registerSchema } from '@/schema/register-schema';
import { hashSync } from 'bcryptjs';

import prisma from '@/lib/prisma';

export const register = async (values: z.infer<typeof registerSchema>) => {
  const validatedFields = registerSchema.safeParse(values);

  if (!validatedFields.success) return { error: 'Invalid fields!' };

  const { username, email, password } = validatedFields.data;

  const hashedPassword = hashSync(password, 10);

  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser) return { error: 'Email already to use!' };

  await prisma.user.create({
    data: { username, email, password: hashedPassword },
  });

  return { success: 'Email sent!' };
};
