import { auth } from '@/lib/auth';
import Link from 'next/link';
import Image from 'next/image';
import Login from '@/components/Login';

export default async function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <>
      <header className="mb-10 w-full border-b-2 border-b-parchment-500 pb-6 ">
        <Link
          href={'/'}
          className=" flex items-center gap-3 font-heading text-3xl leading-7"
        >
          <Image
            src="/logo-color.svg"
            height={48}
            width={48}
            alt="Legacy of Maela"
          />
          <span className="mb-2 flex">The Road to Teloceja</span>
        </Link>
      </header>

      <main className={'flex w-full' + (!session ? ' justify-center' : '')}>
        {session ? (
          children
        ) : (
          <Login title="Please login to view account information." />
        )}
      </main>
    </>
  );
}
