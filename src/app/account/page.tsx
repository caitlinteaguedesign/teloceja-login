import { auth, signOut } from '@/lib/auth';
import Image from 'next/image';
import DisplayInfo from '@/components/DisplayInfo';

export default async function Account() {
  const session = await auth();
  console.log(session);

  return (
    <div className="flex w-full justify-between gap-4">
      <div className=" flex flex-col gap-2">
        <h1 className="text-xl font-semibold">My Account</h1>
        {session?.user?.image && (
          <Image
            height={80}
            width={80}
            src={session?.user?.image}
            alt="my picture"
            className="rounded-full border border-2 border-parchment-600"
          />
        )}
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
      </div>
      {session && (
        <div className="flex w-full max-w-60 flex-col gap-4">
          <DisplayInfo label="Name" value={session.user?.name || ''} />
          <DisplayInfo label="Email" value={session.user?.email || ''} />
        </div>
      )}
    </div>
  );
}
