interface UserProps {
  label: string;
  value: string;
}

export default function DisplayInfo({ label, value }: UserProps) {
  return (
    <div className="flex flex-col gap-1 rounded-md border border-parchment-500 p-4 pt-3">
      <span className="font-semibold uppercase">{label}</span>{' '}
      <span className="text-parchment-700">{value || 'Not set'}</span>
    </div>
  );
}
