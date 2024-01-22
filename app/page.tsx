import Wrapper from '@/components/Wrapper/Wrapper';

import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';

export default function Home() {
  return (
    <Wrapper>
      <Link
        href='/auth/login'
        className={buttonVariants({ variant: 'default' })}
      >
        Sign in
      </Link>
    </Wrapper>
  );
}
