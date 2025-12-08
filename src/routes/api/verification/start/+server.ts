import { pendingClients } from "$lib/server/state"

export async function POST({ url }) {
    const uuid = url.searchParams.get("uuid")
    pendingClients.set(uuid, {complete: false, startTime: Date.now()})

    return new Response("ok")
}
