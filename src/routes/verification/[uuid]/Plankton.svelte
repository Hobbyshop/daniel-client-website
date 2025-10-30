<script>
    import plankton from "$lib/images/moaning_plankton.jpg"
    import planktonAudio from "$lib/sound/moaning_plankton.mp3"
    import { onMount } from "svelte";

    let audioElement = null

    onMount(() => {
        // turn volume up
        audioElement.play()
    })
</script>

<svelte:head>
    <title>Epic Daniel Client Prank</title>
</svelte:head>

<div class="centered">
    <img src={plankton} alt="moaining plankton">
</div>

<audio src={planktonAudio} preload="audio" bind:this={audioElement}></audio>

<style>
    .centered {
        display: flex;
        justify-content: center;
        align-items: center;

        height: 90vh;
    }

    img {
        width: 100%;
        max-width: 600px;
        max-height: 600px;

        border-radius: 10px;
    }
</style>
