export let _pendingClients = new Map<string, {complete: boolean, startTime: number}>()

export async function POST({ request }) {
    const { uuid } = await request.json()
    _pendingClients.set(uuid, {complete: false, startTime: Date.now()})

    return new Response("ok")
}
