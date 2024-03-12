import { NextRequest } from "next/server";
import { cookies, headers } from "next/headers";

export async function GET(request: NextRequest) {
  const headersList = headers();
  const requestHeaders = new Headers(request.headers);
  console.log(headersList.get("Authorization"));
  console.log(requestHeaders.get("Authorization"));
  cookies().set("resultsPerPage", "20");
  console.log(cookies().get("resultsPerPage"));

  return new Response("<h1>Profile Route!</h1>", {
    headers: {
      "Content-type": "text/html",
    },
  });
}
