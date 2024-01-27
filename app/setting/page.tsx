import { auth, signOut } from '@/auth';
import { Button } from '@/components/ui/button';

export default async function Setting() {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}

      <form
        action={async () => {
          'use server';

          await signOut();
        }}
      >
        <Button variant='destructive'>Sign out</Button>
      </form>
    </div>
  );
}
