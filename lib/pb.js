import PocketBase from 'https://cdnjs.cloudflare.com/ajax/libs/pocketbase/0.26.2/pocketbase.es.mjs';

// PocketBase local dev usually runs on HTTP. Use HTTP for local dev to avoid TLS errors.
const PB_URL = "http://127.0.0.1:8090/";

// Une seule instance PocketBase côté client
export const pb = new PocketBase(PB_URL);

// pb.authStore persiste tout seul dans localStorage
// donc l'utilisateur reste connecté même après refresh