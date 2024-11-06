export function middleware(req, ev) {
  const response = NextResponse.next();

  // Add CORS headers
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Return early if this is an OPTIONS request
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: response.headers,
      status: 200
    });
  }

  return response;
}
