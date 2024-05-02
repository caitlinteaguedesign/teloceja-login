import Image from 'next/image';
import Login from '@/components/Login';

export default function Home() {
  return (
    <>
      <Image
        src="/logo-color.svg"
        height={80}
        width={80}
        alt="Legacy of Maela"
      />
      <h1 className="mb-16 font-heading text-5xl">The Road to Teloceja</h1>
      <main className="flex w-full justify-center">
        <Login title="Login to your account" />
      </main>
    </>
  );
}
