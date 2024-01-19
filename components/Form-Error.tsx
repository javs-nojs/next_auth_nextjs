import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

export default function FormError({ meesage }: { meesage: string }) {
  return (
    <div className='bg-destructive/15 text-destructive p-3 rounded-md gap-x-2 flex items-center text-sm'>
      <ExclamationTriangleIcon className='h-4 w-4' />
      <p>{meesage}</p>
    </div>
  );
}
