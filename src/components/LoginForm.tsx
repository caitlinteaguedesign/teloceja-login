'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const router = useRouter();
  const handleLogin = () => {
    router.push('/account');
  };

  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold">Login to your account</h2>
      <form className="grid gap-4">
        <div className="bg-danger-100 border-danger-400 rounded-md border p-5 pt-3">
          <h3 className="text-parchment-700 text-lg font-semibold">
            Incorrect email or password
          </h3>
          <p>
            The email or password you entered does not match our records. Please
            try again, and contact{' '}
            <a
              href="mailto:support@maela.com"
              className="text-accent font-semibold"
            >
              support@maela.com
            </a>{' '}
            if you are unable to access your account.
          </p>
        </div>
        <div className="grid gap-1">
          <label className="block">Email</label>
          <input
            className="text-parchment-800 placeholder:text-parchment-600 h-12 rounded-md border border-parchment-500 p-4 pt-3"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
          <div className="text-danger-400">Error message</div>
        </div>
        <div className="grid gap-1">
          <label className="block">Password</label>
          <input
            className="text-parchment-800 placeholder:text-parchment-600 h-12 rounded-md border border-parchment-500 p-4 pt-3"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
          <div className="text-danger-400">Error message</div>
        </div>
        <button
          type="submit"
          className="bg-parchment-800 h-12 w-full rounded-md p-3 pt-2 font-semibold text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
}
