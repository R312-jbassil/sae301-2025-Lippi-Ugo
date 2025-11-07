import pb from '../../utils/pb'

export async function POST({ request }) {
  try {
    const { email, password, passwordConfirm, first, last } = await request.json();
    if (!email || !password || !passwordConfirm) {
      return new Response(JSON.stringify({ ok: false, error: 'Champs manquants' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

  // Create user via server-side PocketBase client
  // Map client `first`/`last` to PocketBase `prenom`/`nom` fields
  const data = { email, password, passwordConfirm };
  if (first) data.prenom = first;
  if (last) data.nom = last;

    const record = await pb.collection('users').create(data);

    // Optionally request verification email (non-blocking)
    try {
      await pb.collection('users').requestVerification(email);
    } catch (e) {
      console.warn('requestVerification failed', e);
    }

    return new Response(JSON.stringify({ ok: true, record }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (err) {
    console.error('Register error:', err);
    const body = err?.data ?? (err?.message ? { message: err.message } : { message: String(err) });
    return new Response(JSON.stringify({ ok: false, error: body }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  }
}
