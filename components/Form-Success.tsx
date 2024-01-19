import { CheckCircledIcon } from '@radix-ui/react-icons';

export default function FormSuccess({ meesage }: { meesage: string }) {
  return (
    <div className='bg-emerald-500/15 text-embg-emerald-500 p-3 rounded-md gap-x-2 flex items-center text-sm'>
      <CheckCircledIcon className='h-4 w-4' />
      <p>{meesage}</p>
    </div>
  );
}
