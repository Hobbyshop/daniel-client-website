import { kv } from "@vercel/kv"

export async function POST({ url }) {
    const uuid = url.searchParams.get("uuid")
    let client: VerificationClient = {complete: false, startTime: Date.now()}
    await kv.set(uuid, client)

    return new Response("ok")
}
