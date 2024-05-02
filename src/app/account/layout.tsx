import { auth } from '@/lib/auth';
import Link from 'next/link';
import Login from '@/components/Login';

export default async function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <div className={`flex flex-initial flex-row justify-center`}>
      <div className={`min-h-screen w-48rem bg-white p-8`}>
        <header className="mb-16 border-b-2 border-b-parchment-500 pb-4 font-heading text-2xl">
          <Link href={'/'}> The Road to Teloceja</Link>
        </header>

        <main>
          {session ? (
            children
          ) : (
            <Login title="Please login to view account information." />
          )}
        </main>
      </div>
    </div>
  );
}
