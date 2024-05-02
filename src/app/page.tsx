import Login from '@/components/Login';

export default function Home() {
  return (
    <div className={`flex flex-initial flex-row justify-end`}>
      <div
        className={`flex min-h-screen w-full max-w-md flex-col items-center bg-white p-8`}
      >
        <h1 className="mb-16 font-heading text-3xl">The Road to Teloceja</h1>
        <main className="flex w-full justify-center">
          <Login title="Login to your account" />
        </main>
      </div>
    </div>
  );
}
