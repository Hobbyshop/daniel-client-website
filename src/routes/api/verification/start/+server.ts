export let _pendingClients = new Map<string, {complete: boolean, startTime: number}>()

export async function POST({ url }) {
    const uuid = url.searchParams.get("uuid")
    _pendingClients.set(uuid, {complete: false, startTime: Date.now()})

    return new Response("ok")
}
