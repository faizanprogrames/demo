import Link from "next/link";

export default function Hero() {
  return (
    <div id="hero" className="w-full h-screen bg-black text-white">
      <Link href="/#blog">Go to Blog</Link>
    </div>
  );
}
