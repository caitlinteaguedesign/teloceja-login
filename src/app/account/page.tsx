import { auth, signOut } from '@/lib/auth';
import DisplayInfo from '@/components/DisplayInfo';

export default async function Account() {
  const session = await auth();

  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold">My Account</h1>
        <form
          action={async () => {
            'use server';
            await signOut({ redirectTo: '/' });
          }}
        >
          <button type="submit" className="font-semibold text-accent">
            Log out
          </button>
        </form>
      </div>
      {session && (
        <div className="flex flex-col gap-4">
          <DisplayInfo label="Name" value={session.user?.name || ''} />
          <DisplayInfo label="Email" value={session.user?.email || ''} />
        </div>
      )}
    </div>
  );
}
