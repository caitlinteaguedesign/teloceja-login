'use client';

import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();
  const handleLogin = () => {
    router.push('/account');
  };
  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold">Login to your account</h2>
      <form className="grid gap-4">
        <div className="grid gap-1">
          <label className="text-parchment-900 block">Email</label>
          <input
            className="text-parchment-800 h-12 rounded-md border border-parchment-500 p-4 pt-3"
            type="email"
            value=""
            placeholder="Enter your email"
          />
          <div className="text-error-400">Error message</div>
        </div>
        <div className="grid gap-1">
          <label className="text-parchment-900 block">Password</label>
          <input
            className="text-parchment-800 h-12 rounded-md border border-parchment-500 p-4 pt-3"
            type="password"
            value=""
            placeholder="Enter your password"
          />
          <div className="text-error-400">Error message</div>
        </div>
        <button
          type="button"
          onClick={handleLogin}
          className="bg-parchment-800 h-12 w-full rounded-md p-3 pt-2 font-semibold text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
}
