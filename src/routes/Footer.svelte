<script>
    import troll from "$lib/images/troll.png"
</script>

<div class="footer">
    Made with
    <img src={troll} alt="trollface">
    by <a href="https://github.com/hobbyshop">hobbyshop</a>
</div>

<style>
    .footer {
        display: flex;
        align-items: center;
        gap: 5px;

        margin-block: 2rem;
    }

    a {
        color: #9449d6;
    }
</style>
