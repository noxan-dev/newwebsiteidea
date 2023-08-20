<script>
    import { base } from '$app/paths';
</script>

<nav class="layout">
  <a sveltekit:prefetch href="{base}/">Home</a>
  <a sveltekit:prefetch href="{base}/blog">Blog</a>
  <a sveltekit:prefetch href="{base}/about">About</a>
</nav>

<style>
     nav {
        background: rgba(0, 0, 0, 0.4);
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    nav,
    footer {
        text-transform: uppercase;
        font-size: 0.7rem;
        letter-spacing: 0.1px;
        font-weight: 500;
    }
</style>