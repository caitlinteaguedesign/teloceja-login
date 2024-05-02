interface UserProps {
  name: string;
  email: string;
}

export default function UserInfo({ name, email }: UserProps) {
  return (
    <>
      <div>
        <span className="font-semibold uppercase">Name</span>{' '}
        <span className="text-parchment-700">{name || 'Not set'}</span>
      </div>
      <div>
        <span className="font-semibold uppercase">Email</span>{' '}
        <span className="text-parchment-700">{email || 'Not set'}</span>
      </div>
    </>
  );
}
