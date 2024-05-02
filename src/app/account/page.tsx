import { auth, signOut } from '@/auth';
import UserInfo from '@/components/UserInfo';
import GoogleLogin from '@/components/GoogleLogin';

export default async function Account() {
  const session = await auth();

  return (
    <div className={`flex flex-initial flex-row justify-center`}>
      <div className={`min-h-screen w-48rem bg-white p-8`}>
        <header className="font-heading text-2xl">The Road to Teloceja</header>

        <main>
          {session ? (
            <>
              <h1 className="text-xl font-semibold">My Account</h1>
              <form
                action={async () => {
                  'use server';
                  await signOut({ redirectTo: '/' });
                }}
              >
                <button type="submit" className="font-semibold text-accent">
                  Log out
                </button>
              </form>
              {session.user && (
                <UserInfo
                  name={session.user.name || ''}
                  email={session.user.email || ''}
                />
              )}
            </>
          ) : (
            <>
              <p>Please login to view this content.</p>
              <GoogleLogin />
            </>
          )}
        </main>
      </div>
    </div>
  );
}
