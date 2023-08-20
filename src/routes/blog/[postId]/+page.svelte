<script>
  import Screen from "$lib/components/Screen.svelte";

  export let data;
  const { post } = data;
</script>



<Screen>
  <header>This is my post {post.id}</header>
  <h1>{post.title}</h1>
  <p>{post.body}</p>
</Screen>
