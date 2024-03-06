import { headers } from "next/headers";

export async function GET() {
  const headersList = headers();
  return new Response("Profile Route!");
}
