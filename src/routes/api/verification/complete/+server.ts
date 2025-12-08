import { pendingClients } from '$lib/server/state';
import { error } from '@sveltejs/kit';

export async function PUT({ url }) {
    const uuid = url.searchParams.get("uuid")
    if (!pendingClients.has(uuid))
        error(400, "Provided UUID has no pending verification!")

    pendingClients.get(uuid)!.complete = true
    return new Response("ok")
}
