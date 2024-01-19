'use client';

import * as z from 'zod';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { LoginSchema } from '@/schema/Login-Schema';

import CardWrapper from './Card-Wrapper';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import FormError from '../Form-Error';
import FormSuccess from '../Form-Success';
import { login } from '@/actions/login';
import { useTransition } from 'react';

export default function LoginForm() {
  const [isPeding, setTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (value: z.infer<typeof LoginSchema>) => {
    setTransition(() => {
      login(value);
    });
  };

  return (
    <CardWrapper
      headerLabel='Welcome back'
      backButtonLabel="Don't have an accounts?"
      backButtonHref='/auth/>register'
      showSocial
    >
      <Form {...form}>
        <form onClick={form.handleSubmit(onSubmit)} className='space-y-6'>
          <div className='space-y-4'>
            <FormField
              name='email'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPeding}
                      type='email'
                      placeholder='example@gmail.com'
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
                      {...field}
                      disabled={isPeding}
                      type='password'
                      placeholder='******'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormSuccess meesage='succes' />
          <FormError meesage='hello world' />

          <Button type='submit' className='w-full' disabled={isPeding}>
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
