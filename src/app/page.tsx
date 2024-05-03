import Link from 'next/link';
import Image from 'next/image';
import { auth } from '@/lib/auth';
import Login from '@/components/Login';
import Logout from '@/components/Logout';

export default async function Home() {
  const session = await auth();

  return (
    <>
      <Image
        priority
        src="/logo-color.svg"
        height={80}
        width={80}
        alt="Legacy of Maela"
      />
      <h1 className="mb-2 font-heading text-5xl">The Road to Teloceja</h1>
      <Link href="/about" className="mb-16 font-semibold text-accent ">
        About
      </Link>
      <main className="flex w-full justify-center">
        {session ? (
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-2xl font-extrabold">You are logged in!</h2>
            <div className="flex justify-center gap-6 ">
              <Link
                href="/account"
                className="mb-16 font-semibold text-accent "
              >
                Go to My Account
              </Link>
              <Logout />
            </div>
          </div>
        ) : (
          <Login title="Login to your account" />
        )}
      </main>
    </>
  );
}
