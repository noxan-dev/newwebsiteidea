<script>
    import { base } from '$app/paths';
    import "@picocss/pico/css/pico.css";
</script>

<nav>
  <div class="collapse nav">
    <div class="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
      </div>
  </div>
  <div>
    <div><a sveltekit:prefetch href="{base}/">Home</a></div>
    <div><a sveltekit:prefetch href="{base}/about">About</a></div>
    <div><a sveltekit:prefetch href="{base}/blog">Blog</a></div>
  </div>
</nav>


<style>
     nav {
        background: rgba(0, 0, 0, 0.4);
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

     span {
        background: #fff;
        display: block;
        height: 2px;
        margin-bottom: 5px;
        transition: all 0.2s ease-in-out;
        width: 20px;
    }
</style>