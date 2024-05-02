import LoginForm from './FormLogin';
import GoogleLogin from './GoogleLogin';

interface LoginProps {
  title: string;
}

export default function Login({ title }: LoginProps) {
  return (
    <div className="grid w-full max-w-xs gap-6">
      <p className="text-lg font-semibold leading-6">{title}</p>
      <LoginForm />
      <hr className="bt-1 border-parchment-500" />
      <GoogleLogin />
    </div>
  );
}
