import { signIn } from '@/lib/auth';
import Image from 'next/image';

export default function FormLogin() {
  return (
    <form
      className="grid gap-4"
      action={async (formData) => {
        'use server';
        await signIn('credentials', formData);
      }}
    >
      <div className="grid-cols-info-card grid items-center gap-x-2 gap-y-1 rounded-md border border-danger-400 bg-danger-100 p-3 pb-4">
        <Image src="/warning-icon.svg" alt="warning" width={20} height={20} />
        <h3 className="text-lg font-semibold text-parchment-700">
          Incorrect email or password
        </h3>
        <p className="col-start-2">
          The email or password you entered does not match our records. Please
          try again, and contact{' '}
          <a
            href="mailto:support@maela.com"
            className="font-semibold text-accent"
          >
            support@maela.com
          </a>{' '}
          if you are unable to access your account.
        </p>
      </div>
      <div className="grid gap-1">
        <label className="block">Email</label>
        <input
          className="h-12 rounded-md border border-parchment-500 p-4 pt-3 text-parchment-800 placeholder:text-parchment-600"
          type="email"
          name="email"
          required
          placeholder="Enter your email"
        />
      </div>
      <div className="grid gap-1">
        <label className="block">Password</label>
        <input
          className="h-12 rounded-md border border-parchment-500 p-4 pt-3 text-parchment-800 placeholder:text-parchment-600"
          type="password"
          name="password"
          required
          placeholder="Enter your password"
        />
      </div>
      <button className="mt-1 h-12 w-full rounded-md bg-parchment-800 p-3 pt-2 font-semibold text-white">
        Login
      </button>
    </form>
  );
}
