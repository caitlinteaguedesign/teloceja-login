import LoginForm from '@/components/LoginForm';

export default function Home() {
  return (
    <div className={`flex flex-initial flex-row justify-end`}>
      <div className={`w-32rem min-h-screen bg-white p-20`}>
        <h1 className="font-heading text-2xl">The Road to Teloceja</h1>
        <LoginForm />
      </div>
    </div>
  );
}
