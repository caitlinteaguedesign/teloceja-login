import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="box-border flex min-h-full flex-col items-center justify-center gap-2 pb-20">
      <h2 className="text-2xl font-extrabold">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="font-semibold text-accent">
        Return Home
      </Link>
    </div>
  );
}
