import LoginButton from '@/components/button/Login-Button';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className='h-screen flex flex-col justify-center items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-400 via-sky-200 to-pink-400'>
      <div className='space-y-6 text-center'>
        <h1 className='text-6xl uppercase drop-shadow-md font-semibold'>
          auth
        </h1>

        <p className='text-xl pb-6'>A simple Authentication service</p>

        <LoginButton>
          <Button variant='default' size='lg'>
            Sign in
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
