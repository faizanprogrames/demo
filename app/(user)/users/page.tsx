import { Props } from "@typings";
import Image from "next/image";

async function getData() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_start=&_limit=50"
  );

  if (!res.ok) {
    console.log("Failed to fetch Data");
  }

  return res.json();
}

export default async function User() {
  const users = await getData();
  return (
    <main className="">
      {users.map((user: Props) => (
        <div key={user.id}>
          <div className="relative h-12 w-12">
            <Image
              src={user.url}
              alt={user.title}
              fill
              className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-10 items-center justify-center object-cover"
            />
          </div>
        </div>
      ))}
    </main>
  );
}
