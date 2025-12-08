import { error } from "@sveltejs/kit"
import { _pendingClients } from "../start/+server"

export async function GET({ url }) {
    const uuid = url.searchParams.get("uuid")
    if (!_pendingClients.has(uuid))
        error(400, "Provided UUID has no pending verification!")

    const start = Date.now()
    while (Date.now() - start < 9_000) {
        if (!_pendingClients.get(uuid)!.complete) {
            // wait 20ms and try again
            await new Promise(r => setTimeout(r, 20))
            continue
        }
        return new Response("true")
    }
    
    return new Response("false")
}
