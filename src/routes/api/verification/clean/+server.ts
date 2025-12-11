import { kv } from "@vercel/kv";

export async function GET() {
    for(const uuid in await kv.keys("*")) {
        const client: VerificationClient | null = await kv.get(uuid)

        if (client && client.startTime + 3_600_000 < Date.now())
            await kv.del(uuid)
    }
}
