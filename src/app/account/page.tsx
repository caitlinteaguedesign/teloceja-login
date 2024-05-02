import { auth, signOut } from '@/lib/auth';
import UserInfo from '@/components/UserInfo';

export default async function Account() {
  const session = await auth();

  return (
    <>
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
      {session && (
        <UserInfo
          name={session.user?.name || ''}
          email={session.user?.email || ''}
        />
      )}
    </>
  );
}
