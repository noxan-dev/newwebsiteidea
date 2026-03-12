<script>
  import Screen from "$lib/components/Screen.svelte";
  import { base } from "$app/paths";
  export let data;
  const { posts } = data;
</script>


<div>
  <h1>Blog</h1>
  <ul>
    {#each posts as post}
      <div>
        <h3>{post.title}</h3>
        <li><a href="{base}/blog/{post.id}" data-sveltekit-prefetch>Read More</a></li>
      </div>
    {/each}
  </ul>
</div>