import { error } from "@sveltejs/kit"
import { kv } from "@vercel/kv"

export async function GET({ url }) {
    const uuid = url.searchParams.get("uuid")
    if (await kv.get(uuid) == null)
        error(400, "Provided UUID has no pending verification!")

    const start = Date.now()
    while (Date.now() - start < 9_000) {
        const client: VerificationClient | null = await kv.get(uuid)

        if (!client || !client.complete) {
            // wait 20ms and try again
            await new Promise(r => setTimeout(r, 20))
            continue
        }
        return new Response("true")
    }
    
    return new Response("false")
}
