import pb from '../../utils/pb'

export async function POST({ request }) {
  const { nom, code_svg } = await request.json();

  if (!nom || !code_svg) {
    return new Response('Nom ou SVG manquant', { status: 400 });
  }

  try {
    const record = await pb.collection('lunette').create({ nom, code_svg });
    return new Response(JSON.stringify(record), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Erreur PocketBase:', err);
    return new Response('Erreur serveur', { status: 500 });
  }
}