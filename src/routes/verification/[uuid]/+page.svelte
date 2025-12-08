<script>
    import Plankton from "./Plankton.svelte";
    import backgroundImage from "$lib/images/background.png"

    export let data;

    let contiune = false

    async function continueButtonClicked() {
        contiune = true
        const res = await fetch(`/api/verification/complete?uuid=${data.verificationId}`, {method: "PUT"})
        console.log("Verification complete: " + await res.text())
    }
</script>

{#if contiune}
    <Plankton/>
{:else}
    <div class="center">
        <div class="card" style="background-image: url({backgroundImage});">
            <p class="nametag">{data.name}</p>
            <img src="https://vzge.me/bust/256/{data.avatarId}?no=cape" alt="Skin" draggable="false">
        </div>
        <button class="button" on:click={continueButtonClicked}>Continue</button>
    </div>
{/if}

<style>
    @font-face {
        font-family: Minecraft;
        src: url(Minecraft.ttf)
    }

    .center {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1em;

        height: 90vh;
    }

    .card {
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;

        background-size: cover;
        background-position: center;
        width: 340px;
        height: 340px;
        border-radius: 10px;
    }

    .nametag {
        font-family: Minecraft;
        font-size: 20px;

        padding-inline: 1em;
        padding-block: 0.5em;
        margin-block: 0.5em;

        background-color: #00000080;
        color: white;
    }

    .card img {
        margin: 0px;
    }

    .center button {
	    font-family: 'Readex Pro', sans-serif;
        cursor: pointer;
        padding-inline: 3em;
    }
</style>
