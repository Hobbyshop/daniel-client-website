export let _pendingClients = new Map()

export async function POST({ request }) {
    const { uuid } = await request.json()
    _pendingClients.set(uuid, false)

    console.log("Start: " + uuid)
    return new Response("ok")
}
