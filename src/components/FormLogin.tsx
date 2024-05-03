import { signIn } from '@/lib/auth';

export default function FormLogin() {
  return (
    <form
      className="grid gap-4"
      action={async () => {
        'use server';
        await signIn();
      }}
    >
      {/* <div className="grid gap-1">
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
      </div> */}
      <button
        type="submit"
        className="mt-1 h-12 w-full rounded-md bg-parchment-800 p-3 pt-2 font-semibold text-white"
      >
        Sign in with Credentials
      </button>
    </form>
  );
}
