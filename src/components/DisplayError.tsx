import Image from 'next/image';
export default function DisplayError() {
  <div className="flex items-center gap-1 ">
    <Image src="/warning-icon.svg" alt="warning" width={18} height={18} />
    <span className="mb-0.5 font-semibold text-danger-400">Error message</span>
  </div>;
}
