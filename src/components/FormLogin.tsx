import { signIn } from '@/lib/auth';

export default function LoginForm() {
  return (
    <form
      className="grid gap-4"
      action={async (formData) => {
        'use server';
        await signIn('credentials', formData);
      }}
    >
      <div className="rounded-md border border-danger-400 bg-danger-100 p-5 pt-3">
        <h3 className="text-lg font-semibold text-parchment-700">
          Incorrect email or password
        </h3>
        <p>
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
        <div className="text-danger-400">Error message</div>
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
        <div className="text-danger-400">Error message</div>
      </div>
      <button className="h-12 w-full rounded-md bg-parchment-800 p-3 pt-2 font-semibold text-white">
        Login
      </button>
    </form>
  );
}
