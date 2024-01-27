'use client';

import { useState, useTransition } from 'react';

import * as z from 'zod';

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
import { login } from '@/actions/login';

export default function LoginForm() {
  const [isPending, setTransition] = useTransition();
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (fields: z.infer<typeof loginSchema>) => {
    setError('');
    setSuccess('');

    setTransition(() => {
      login(fields).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
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
                      disabled={isPending}
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
                    <Input
                      disabled={isPending}
                      type='password'
                      placeholder='******'
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <SuccessMessage message={success} />
          <ErrorMessage message={error} />

          <Button
            disabled={isPending}
            type='submit'
            variant='default'
            className='w-full'
          >
            Sign in
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
