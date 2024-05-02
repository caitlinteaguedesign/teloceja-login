import { signIn } from '@/lib/auth';

export default function GoogleLogin() {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('google', { redirectTo: '/account' });
      }}
    >
      <button
        type="submit"
        className="h-12 w-full rounded-md border border-parchment-500 p-4 pt-3 font-semibold leading-4 text-parchment-800"
      >
        Sign in with Google
      </button>
    </form>
  );
}
