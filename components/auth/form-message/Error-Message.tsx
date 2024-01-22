import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

export default function ErrorMessage({ message }: { message: string }) {
  if (!message) return null;

  return (
    <div className='bg-destructive/15 w-full p-3 rounded-md text-sm text-destructive flex gap-x-2'>
      <ExclamationTriangleIcon className='w-5 h-5' />
      {message}
    </div>
  );
}
