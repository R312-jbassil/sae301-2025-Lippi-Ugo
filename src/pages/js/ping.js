export function GET() {
  return new Response(JSON.stringify({ ok: true, pong: true }), { status: 200, headers: { 'Content-Type': 'application/json' } });
}
