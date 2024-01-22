'use client';

import * as z from 'zod';

import { signIn } from '@/auth';

import { AuthError } from 'next-auth';

import CardWrapper from '@/components/Wrapper/Card-Wrapper.';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';

import { loginSchema } from '@/schema/Login-Schema';
import { Button } from '@/components/ui/button';

import ErrorMessage from '../form-message/Error-Message';
import SuccessMessage from '../form-message/Success-Message';

export default function LoginForm() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (fields: z.infer<typeof loginSchema>) => {
    console.log('click');
    try {
      const { email, password } = fields;

      await signIn('credentials', { email, password, redirectTo: '/setting' });
    } catch (err) {
      if (err instanceof AuthError) {
        switch (err.type) {
          case 'CredentialsSignin':
            return 'Invalid credentials';
          default:
            return "Something wen't wrong!";
        }
      }
    }
  };

  return (
    <CardWrapper
      title='Sign in'
      href='/auth/register'
      changeButton='Create an acount?'
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <div className='space-y-4'>
            <FormField
              name='email'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>

                  <FormControl>
                    <Input
                      type='email'
                      placeholder='jhon@example.com'
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name='password'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>

                  <FormControl>
                    <Input type='password' placeholder='******' {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* <SuccessMessage message='Success' />
          <ErrorMessage message="Something wen't wrong!" /> */}

          <Button type='submit' variant='default' className='w-full'>
            Sign in
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
