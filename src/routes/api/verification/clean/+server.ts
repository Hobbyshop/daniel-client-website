import { _pendingClients } from "../start/+server";

export async function GET() {
    for(const uuid in _pendingClients) {
        if (_pendingClients.get(uuid)!.startTime + 3600 < Date.now())
            _pendingClients.delete(uuid)
    }
}
