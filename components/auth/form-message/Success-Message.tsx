import { CheckCircledIcon } from '@radix-ui/react-icons';

export default function SuccessMessage({
  message,
}: {
  message: string | undefined;
}) {
  if (!message) return null;

  return (
    <div className='bg-emerald-500/15 p-3 rounded-md text-sm text-emerald-500 flex gap-x-2'>
      <CheckCircledIcon className='w-5 h-5' />
      {message}
    </div>
  );
}
