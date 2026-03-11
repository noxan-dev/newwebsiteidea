<script>
  import Screen from "$lib/components/Screen.svelte";
  import { base } from "$app/paths";
  export let data;
  const { posts } = data;
</script>


<Screen>
  <h1>This is my blog</h1>
  <ul>
    {#each posts as post}
      <div>
        <h3>{post.title}</h3>
        <li><a href="{base}/blog/{post.id}" data-sveltekit-prefetch>Read More</a></li>
      </div>
    {/each}
  </ul>
</Screen>