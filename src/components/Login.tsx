import FormLogin from './FormLogin';
import GoogleLogin from './GoogleLogin';

interface LoginProps {
  title: string;
}

export default function Login({ title }: LoginProps) {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <p className="text-xl font-semibold leading-6">{title}</p>
      <FormLogin />
      <hr className="bt-1 border-parchment-500" />
      <GoogleLogin />
    </div>
  );
}
