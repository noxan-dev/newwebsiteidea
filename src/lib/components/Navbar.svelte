<nav class="layout">
  <a sveltekit:prefetch href="/">Home</a>
  <a sveltekit:prefetch href="/blog">Blog</a>
  <a sveltekit:prefetch href="/about">About</a>
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
