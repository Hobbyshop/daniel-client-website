export let pendingClients = new Map()

export async function POST({ request }) {
    const { uuid } = await request.json()
    pendingClients.set(uuid, false)
    return new Response("ok")
}
