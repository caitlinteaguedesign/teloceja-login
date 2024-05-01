import Link from 'next/link';

export default function Account() {
  return (
    <div className={`flex flex-initial flex-row justify-center`}>
      <div className={`w-48rem min-h-screen bg-white p-8`}>
        <header className="font-heading text-2xl">The Road to Teloceja</header>
        <main>
          <h1 className="text-xl font-semibold">My Account</h1>
          <Link href="/" className="text-accent font-semibold">
            Log out
          </Link>
          <div>
            <span className="text-parchment-900 font-semibold uppercase">
              Name
            </span>{' '}
            <span className="text-parchment-700">NA</span>
          </div>
          <div>
            <span className="text-parchment-900 font-semibold uppercase">
              Email
            </span>{' '}
            <span className="text-parchment-700">NA</span>
          </div>
          <div>
            <span className="text-parchment-900 font-semibold uppercase">
              Password
            </span>{' '}
            <span className="text-parchment-700">NA</span>
          </div>
        </main>
      </div>
    </div>
  );
}
