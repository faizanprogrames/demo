import Link from "next/link";

export default function Blog() {
  return (
    <div id="blog" className="w-full h-screen bg-black text-white">
      <Link href="/#hero">Go to Home</Link>
    </div>
  );
}
