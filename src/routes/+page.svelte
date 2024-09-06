<script>
	import mainMenu from "$lib/images/main-menu.png"
	import { Download02Icon } from "hugeicons-svelte";
	import { UnavailableIcon } from "hugeicons-svelte";
    import Information from "./Information.svelte";
    import Footer from "./Footer.svelte";
</script>

<svelte:head>
	<title>Daniel Client</title>
	<meta name="description" content="The Daniel Client home page. Download today, best client ngl" />
</svelte:head>

<main>
	<div class="landing">
		<div class="left-side">
			<p>The previous-level, stone age, primitive Minecraft Client created because Daniel didn't want to make the client himself.</p>
			<div class="buttons">
				<a href="https://download1507.mediafire.com/7capl87imd0gXHKcoWwe6EYxhqNCllVcIrOlfiBH7g7Vv4JxmbJiAnrzF4Zboj2p8td1-TXN4iXmfohkRKXk4uKhMDn9przcTUxGAxP6wxcZP92T-wfGqwTTWHZ7PuMxVjyxeKr8CFi3bx0Mwe7wemC1tRHtXvFmyjHAUk9pKUox/vz2ktuyz4pzp1e9/DanielClient.zip" class="button download-button">
					<Download02Icon size={20} />
					Download
				</a>
				<a href="/" class="button">
					<UnavailableIcon size={20} />
					Not Download
				</a>
			</div>
		</div>
		<div class="preview">
			<span class="blur"></span>
			<img src={mainMenu} alt="preview">
		</div>
	</div>
</main>
<Information/>
<Footer/>

<style>
	main {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 100%;
		padding-block: 170px;
	}

	p {
		margin: 0px;
	}

	.landing {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap-reverse;
		align-items: center;
		justify-content: center;

		max-width: 900px;
		width: 100%;
		margin-inline: 40px;
		gap: 90px;
	}

	.left-side {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 340px;
		height: 230px;
	}

	.buttons {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.download-button {
		background-image: url("$lib/images/button.png");
		background-size: cover;
		background-position: center;
		color: white;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.34);
	}

	.preview {
		width: 470px;
		height: 264px;
		position: relative;
	}

	.blur {
		position: absolute;
		width: 100%;
		height: 100%;
		
		z-index: 1;
        background: conic-gradient(rgba(255,55,55,1) 0%, rgba(55,87,255,1) 31%, rgba(255,166,61,1) 57%, rgba(255,179,142,1) 75%, rgba(255,55,55,1) 100%);
		border-radius: 20px;
		filter: blur(100px);
	}

	.preview > img {
		width: 470px;
		height: 264px;
		border-radius: 20px;
		position: relative;
		z-index: 2;
	}
</style>
