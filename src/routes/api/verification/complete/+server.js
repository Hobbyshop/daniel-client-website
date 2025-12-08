import { error } from '@sveltejs/kit';
import { _pendingClients } from '../start/+server';

export async function PUT({ request }) {
    const { uuid } = await request.json()
    if (!_pendingClients.has(uuid))
        error(400, "Provided UUID has no pending verification!")

    console.log("Complete: " + uuid)
    _pendingClients.set(uuid, true)
    return new Response("ok")
}
