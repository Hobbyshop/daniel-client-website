import { error, json } from "@sveltejs/kit"
import { pendingClients } from "../start/+server"

export async function GET({ request }) {
    const { uuid } = await request.json()
    if (!pendingClients.has(uuid))
        error(400, "Provided UUID has no pending verification!")

    const start = Date.now()
    while (Date.now() - start < 10_000) {
        if (!pendingClients.get(uuid)) {
            // wait 20ms and try again
            await new Promise(r => setTimeout(r, 20))
            continue
        }
        return json({ complete: true })
    }
    
    return json({ complete: false })
}
