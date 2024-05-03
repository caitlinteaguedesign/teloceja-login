import Image from 'next/image';

export default function InvalidCredentialsError() {
  return (
    <div className="grid-cols-info-card grid items-center gap-x-2 gap-y-1 rounded-md border border-danger-400 bg-danger-100 p-3 pb-4">
      <Image src="/warning-icon.svg" alt="warning" width={20} height={20} />
      <h3 className="text-lg font-semibold text-parchment-700">
        Incorrect email or password
      </h3>
      <p className="col-start-2">
        The email or password you entered does not match our records. Please try
        again, and contact{' '}
        <a
          href="mailto:support@maela.com"
          className="font-semibold text-accent"
        >
          support@maela.com
        </a>{' '}
        if you are unable to access your account.
      </p>
    </div>
  );
}
