import Link from 'next/link';

export default function About() {
  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-2xl font-extrabold">About</h1>
      <p>A page with some content.</p>
      <Link href="/" className="font-semibold text-accent">
        Home
      </Link>
    </div>
  );
}
