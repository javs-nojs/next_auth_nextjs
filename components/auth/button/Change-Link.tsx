'usse client';

import Link from 'next/link';

import { cn } from '@/lib/utils';

import { buttonVariants } from '@/components/ui/button';

type ChangeLinkProps = {
  href: string;
  label: string;
};

export default function ChangeLink({ href, label }: ChangeLinkProps) {
  return (
    <Link
      className={cn('w-full', buttonVariants({ variant: 'link', size: 'sm' }))}
      href={href}
    >
      {label}
    </Link>
  );
}
