import { signOut } from '@/lib/auth';

export default function Logout() {
  return (
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
  );
}
