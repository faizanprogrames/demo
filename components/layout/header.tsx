import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="m-5 border-2 border-black grid grid-cols-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/services/javascript-service">JavaScript Service</Link>
      </nav>
    </header>
  );
}
