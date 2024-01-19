'use client';

import { useRouter } from 'next/navigation';

type LoginButoonProps = {
  children: React.ReactNode;
  mode?: 'model' | 'redirect';
  asChild?: boolean;
};

export default function LoginButton({
  children,
  mode = 'redirect',
  asChild,
}: LoginButoonProps) {
  const router = useRouter();

  const onClick = () => {
    router.push('/auth/login');
  };

  if (mode === 'model') {
    return <span onClick={onClick}>TODO: implement model!</span>;
  }

  return <span onClick={onClick}>{children}</span>;
}
