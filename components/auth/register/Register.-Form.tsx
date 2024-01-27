'use client';

import { useTransition, useState } from 'react';

import { useRouter } from 'next/navigation';

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

import { registerSchema } from '@/schema/Register-Schema';
import { Button } from '@/components/ui/button';

import ErrorMessage from '../form-message/Error-Message';
import SuccessMessage from '../form-message/Success-Message';
import { register } from '@/actions/register';

export default function RegisterForm() {
  const [isPending, setTransition] = useTransition();
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });

  const router = useRouter();

  const onSubmit = async (fields: z.infer<typeof registerSchema>) => {
    setError('');
    setSuccess('');

    setTransition(() => {
      register(fields).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <CardWrapper
      title='Sign up'
      href='/auth/login'
      changeButton='Already have an account?'
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <div className='space-y-4'>
            <FormField
              name='username'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>

                  <FormControl>
                    <Input
                      disabled={isPending}
                      type='text'
                      placeholder='jhon example'
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

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

          <ErrorMessage message={error} />
          <SuccessMessage message={success} />

          <Button
            disabled={isPending}
            type='submit'
            variant='default'
            className='w-full'
          >
            Create an account
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
