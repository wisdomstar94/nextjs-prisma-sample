export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const body = await request.json();

  console.log('@req.body', body);

  return Response.json({
    timestamp: Date.now(),
  });
}