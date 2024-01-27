'use server';

import * as z from 'zod';
import { loginSchema } from '@/schema/Login-Schema';

export const register = async (values: z.infer<typeof loginSchema>) => {
  const validatedFields = loginSchema.safeParse(values);

  if (!validatedFields.success) return { error: 'Invalid fields!' };

  return { success: 'Email sent!' };
};
