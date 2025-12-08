import { pendingClients } from "$lib/server/state";

export async function GET() {
    for(const uuid in pendingClients) {
        if (pendingClients.get(uuid)!.startTime + 3_600_000 < Date.now())
            pendingClients.delete(uuid)
    }
}
