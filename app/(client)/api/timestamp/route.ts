export async function GET() {
  const timeStamp = new Date().toISOString();
  return Response.json(timeStamp);
}
