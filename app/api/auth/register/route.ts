import { NextRequest, NextResponse } from 'next/server';

import { registerSchema } from '@/schema/Register-Schema';

import prisma from '@/lib/prisma';
import { hashSync } from 'bcryptjs';

export async function POST(request: NextRequest) {
  try {
    const { username, email, password } = await request.json();

    const validatedFields = registerSchema.safeParse({
      username,
      email,
      password,
    });

    if (!validatedFields.success) throw new Error('Invalid Fields!');

    const existingUser = await prisma.user.findUnique({
      where: { email: validatedFields.data.email },
    });

    if (existingUser) throw new Error('Email is already!');

    await prisma.user.create({
      data: {
        username: validatedFields.data.username,
        email: validatedFields.data.email,
        password: hashSync(validatedFields.data.password, 10),
      },
    });

    return NextResponse.json(
      { message: 'Input fields Success!' },
      { status: 202 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 404 }
    );
  }
}
