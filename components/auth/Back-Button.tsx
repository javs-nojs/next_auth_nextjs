import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';

type BackButtonType = {
  label: string;
  href: string;
};

export default function BackButton({ label, href }: BackButtonType) {
  return (
    <Link
      href={href}
      className={cn(
        'font-normal w-full',
        buttonVariants({ variant: 'link', size: 'sm' })
      )}
    >
      {label}
    </Link>
  );
}
