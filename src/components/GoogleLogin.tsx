import { signIn } from '@/lib/auth';
import Image from 'next/image';

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
        className="flex h-12 w-full items-center justify-center gap-3 rounded-md border border-parchment-500 p-4"
      >
        <Image src="/google-icon.svg" height={24} width={24} alt="Google" />
        <span className="mb-0.5 font-semibold text-parchment-800">
          Sign in with Google
        </span>
      </button>
    </form>
  );
}
