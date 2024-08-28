<script>
    import { page } from "$app/stores";

    function getMessage() {
        let message = $page.error?.message
        if (message == "Not Found")
            message = "There's nothing here. Not sure what you expected though..."

        return message
    }
</script>

<main>
    <h1 class="status">{$page.status}</h1>
    <p class="message">{getMessage()}</p>
    <a href="/" class="button">Go back home</a>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 14px;

        height: 100vh;
    }

    .button {
        width: 200px;
    }

    .status {
        font-weight: 800;
        font-size: 120px;
        margin: 0px;

        background: rgb(255,55,55);
        background: linear-gradient(100deg, rgba(255,55,55,1) 10%, rgba(55,87,255,1) 25%, rgba(255,166,61,1) 50%, rgba(255,179,142,1) 75%, rgba(255,55,55,1) 90%);
        color: transparent;
        background-clip: text;
    }

    .message {
        width: 300px;
        text-align: center;
    }
</style>
