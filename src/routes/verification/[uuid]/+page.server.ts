export async function load({ params }) {
    const nameRes = await fetch(`https://api.minecraftservices.com/minecraft/profile/lookup/${params.uuid}`)
    const nameData = await nameRes.json()

    return {
        avatarId: nameRes.ok ? params.uuid : "X-Steve",
        name: nameRes.ok ? nameData.name : "Player"
    }
}
