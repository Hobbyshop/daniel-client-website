<script>
    import logo from "$lib/images/logo.png"
</script>

<header>
    <div class="topbar">
        <div class="flex-row">
            <img src={logo} alt="logo" class="logo">
            <h1>Daniel Client</h1>
        </div>
        <div class="links">
            <a href="/">Home</a>
            <a href="/">404 Page</a>
            <a href="/">Features</a>
            <a href="/">Buy a coffee</a>
        </div>
    </div>
</header>

<style>
	header {
        display: flex;
		justify-content: center;

        position: fixed;
        width: 100%;
        backdrop-filter: blur(40px);
	}

    .topbar {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        max-width: 900px;
        min-width: 600px;
        width: 100%;
        padding-inline: 40px;
    }

    h1 {
        font-size: 22px;
        font-weight: 600;
    }

    .logo {
        width: 22px;
        height: 22px;

        padding-right: 8px;
    }

    .links {
        display: flex;
        gap: 40px;
    }

    .links > a {
        color: black;
        text-decoration: none;
    }
</style>
