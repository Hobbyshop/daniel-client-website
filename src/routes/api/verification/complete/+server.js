import { error } from '@sveltejs/kit';
import { pendingClients } from '../start/+server';

export async function PUT({ request }) {
    const { uuid } = await request.json()
    if (!pendingClients.has(uuid))
        error(400, "Provided UUID has no pending verification!")

    pendingClients.set(uuid, true)
    return new Response("ok")
}
