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
            <a href="/404">404 Page</a>
            <a href="/404">Features</a>
            <a href="/">Buy a coffee</a>
        </div>
    </div>
</header>
<div style="height: 42px;"></div>

<style>
	header {
        display: flex;
		justify-content: center;

        position: fixed;
        z-index: 100;
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
        position: relative;

        transition: 0.3s;
    }

    .links > a::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.1em;
        background-color: black;
        opacity: 0;
        transition: opacity 350ms, transform 350ms;
    }

    .links > a:hover::after {
        opacity: 1;
    }
</style>
