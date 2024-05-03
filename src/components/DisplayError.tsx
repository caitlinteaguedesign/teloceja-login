import Image from 'next/image';

export default function DisplayError(message: string) {
  return (
    <div className="flex items-center gap-1 ">
      <Image src="/warning-icon.svg" alt="warning" width={18} height={18} />
      <span className="mb-0.5 font-semibold text-danger-400">{message}</span>
    </div>
  );
}
