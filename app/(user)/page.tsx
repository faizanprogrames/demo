import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div>
        <Link href="/users">Users Page</Link>
      </div>
    </main>
  );
}
