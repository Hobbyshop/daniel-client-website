import { error } from '@sveltejs/kit';
import { _pendingClients } from '../start/+server';

export async function PUT({ url }) {
    const uuid = url.searchParams.get("uuid")

    console.log("size: " + _pendingClients.size)
    for (const uuid in _pendingClients) {
        console.log(uuid)
    }

    if (!_pendingClients.has(uuid))
        error(400, "Provided UUID has no pending verification!")

    _pendingClients.get(uuid)!.complete = true
    return new Response("ok")
}
