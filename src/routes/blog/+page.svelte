<script>
  import Screen from "$lib/components/Screen.svelte";

  export let data;
  const { posts } = data;
</script>


<Screen>
  <h1>This is my blog</h1>
  <ul>
    {#each posts as post}
      <li><a href="/blog/{post.id}" data-sveltekit-prefetch>{post.title}</a></li>
    {/each}
  </ul>
</Screen>