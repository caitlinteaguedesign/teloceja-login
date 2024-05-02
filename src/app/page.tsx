import GoogleLogin from '@/components/GoogleLogin';

export default function Home() {
  return (
    <div className={`flex flex-initial flex-row justify-end`}>
      <div className={`min-h-screen w-32rem bg-white p-20`}>
        <h1 className="font-heading text-2xl">The Road to Teloceja</h1>
        <GoogleLogin />
      </div>
    </div>
  );
}
