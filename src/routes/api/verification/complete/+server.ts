import { error } from '@sveltejs/kit';
import { kv } from '@vercel/kv';


export async function PUT({ url }) {
    const uuid = url.searchParams.get("uuid")
    const client: VerificationClient | null = await kv.get(uuid)
    
    if (!client)
        error(400, "Provided UUID has no pending verification!")

    client.complete = true
    await kv.set(uuid, client)
    return new Response("ok")
}
