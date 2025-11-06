import pb from '../../utils/pb'

export async function POST({ request }) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return new Response(JSON.stringify({ ok: false, error: 'Email ou mot de passe manquant' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    // Authenticate via server-side PocketBase client
    await pb.collection('users').authWithPassword(email, password);

    // Return token and model to the client
    return new Response(JSON.stringify({ ok: true, token: pb.authStore.token, model: pb.authStore.model }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Login error:', err);
    // Try to extract PocketBase validation/error details when possible
    const body = err?.data ?? (err?.message ? { message: err.message } : { message: String(err) });
    return new Response(JSON.stringify({ ok: false, error: body }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  }
}
